const toBase64 = obj => {
    const str = JSON.stringify(obj);
    return Buffer.from(str).toString('base64');
};

const replaceSpecialChars = b64string => {
    return b64string.replace(/[=+]/g, charToBeReplaced => {
        switch (charToBeReplaced) {
            case '=':
                return '';
            case '+':
                return '-';
            case '/':
                return '_';
        }
    });
};

const header = {
    alg: 'HS256',
    type: 'JWT',
};

const b64Header = toBase64(header);
const jwtB64Header = replaceSpecialChars(b64Header);

const payload = {
    exp: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    name: 'Rafal',
    email: 'myemail@gmail.com',
};

const expToken = payload.exp;

const b64Payload = toBase64(payload);
const jwtB64Payload = replaceSpecialChars(b64Payload);

const crypto = require('crypto');
const createSignature = (jwtB64Header, jwtB64Payload, secret) => {
    let signature = crypto.createHmac('sha256', secret);
    signature.update(jwtB64Header + '.' + jwtB64Payload);
    signature = signature.digest('base64');
    signature = replaceSpecialChars(signature);
    return signature;
};

const secret = 'secret_key';
const secretRefreshToken = 'secret_refresh_token';
const signature = createSignature(jwtB64Header, jwtB64Payload, secret);
const signatureRefreshToken = createSignature(jwtB64Header, jwtB64Payload, secretRefreshToken);

const token = jwtB64Header + '.' + jwtB64Payload + '.' + signature;
const refreshToken = jwtB64Header + '.' + jwtB64Payload + '.' + signatureRefreshToken;

module.exports = {
    expToken,
    token,
    refreshToken,
    secret,
    secretRefreshToken,
    jwtB64Header,
    jwtB64Payload,
};