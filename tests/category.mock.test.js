const {CategoryRegistry} = require("../registry/category-registry");

let category;

beforeAll(async () => {
    category = await CategoryRegistry.categoryGetOne('7777')
})
jest
    .spyOn(CategoryRegistry, 'categoryGetOne')
    .mockImplementation(async (category_id) => {
        return new CategoryRegistry({
            category_id,
            category_name: 'Example',
        });
    });

test('Checking category registry', async () => {
    expect(category).toBeDefined();
});

jest
    .spyOn(CategoryRegistry.prototype, 'update')
    .mockImplementation(() => {});

test('Updating testing category', async () => {
    await category.update();
});