const {UserRegistry} = require('../registry/user-registry');

let user;

beforeAll(async () => {
    user = await UserRegistry.customerGetOne('7777');
});
jest
    .spyOn(UserRegistry, 'customerGetOne')
    .mockImplementation(async (customer_id) => {
        return new UserRegistry({
            customer_id,
            first_name: 'Example',
            last_name: 'Example2'
        });
    });

test('Checking user registry', async () => {
    expect(user).toBeDefined();
});

jest
    .spyOn(UserRegistry.prototype, 'update')
    .mockImplementation(() => {});

test('Updating testing user', async () => {
    await user.update();
});