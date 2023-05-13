// const {CategoryRegistry} = require("../registry/category-registry");
// const {pool} = require("../utils/db");
//
// let category;
//
// beforeAll(() => {
//     category = new CategoryRegistry({
//         category_name: 'example',
//     });
// });
//
// afterAll(async () => {
//     await pool.end();
// });
//
// test('Not inserted CategoryRegistry should have no id', async () => {
//     expect(category.category_id).toBeUndefined();
// });
//
// test('Inserted CategoryRegistry should have id', async () => {
//     await category.insert()
//     expect(category.category_id).toBeDefined();
//     expect(category.category_id).toMatch(/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}/);
// });