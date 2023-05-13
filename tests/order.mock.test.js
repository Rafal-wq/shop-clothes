const {OrderRegistry} = require('../registry/order-registry');

let order;

beforeAll(async () => {
    order = await OrderRegistry.orderGetOne('7777');
});
jest
    .spyOn(OrderRegistry, 'orderGetOne')
    .mockImplementation(async (order_id) => {
        return new OrderRegistry({
            order_id,
        });
    });

test('Checking order registry', async () => {
    expect(order).toBeDefined();
});