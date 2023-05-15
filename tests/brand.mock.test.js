const {BrandRegistry} = require('../registry/item-brand-registry');

let brand;

beforeAll(async () => {
    brand = await BrandRegistry.brandGetOne('7777');
});
jest
    .spyOn(BrandRegistry, 'brandGetOne')
    .mockImplementation(async (brand_id) => {
        return new BrandRegistry({
            brand_id,
            brand_name: 'Example',
        });
    });

test('Checking brand registry', async () => {
    expect(brand).toBeDefined();
});

jest
    .spyOn(BrandRegistry.prototype, 'update')
    .mockImplementation(() => {});

test('Updating testing brand', async () => {
    await brand.update();
});