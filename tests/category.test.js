const {CategoryRegistry} = require("../registry/category-registry");
const {pool} = require("../utils/db");

afterAll(async () => {
    await pool.end();
});
test('Not inserted CategoryRegistry should have no id', async () => {
    const nc = new CategoryRegistry({
        category_name: 'Example',
    });
    expect(nc.category_id).toBeUndefined();
});

test('Inserted CategoryRegistry should have id', async () => {
    const nc = new CategoryRegistry({
        category_name: 'Example',
    });
    await nc.insert()
    expect(nc.category_id).toBeDefined();
    expect(nc.category_id).toMatch(/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/);
});