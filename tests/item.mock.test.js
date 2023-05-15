const {ItemRegistry} = require('../registry/items-registry');

let item;

beforeAll(async () => {
    item = await ItemRegistry.itemGetOne('7777');
});
jest
    .spyOn(ItemRegistry, 'itemGetOne')
    .mockImplementation(async (item_id) => {
        return new ItemRegistry({
            item_id,
            name: 'Example',
        });
    });

test('Checking item registry', async () => {
    expect(item).toBeDefined();
});

jest
    .spyOn(ItemRegistry.prototype, 'update')
    .mockImplementation(() => {});

test('Updating testing item', async () => {
    await item.update();
});