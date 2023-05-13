const {WorkersRegistry} = require('../registry/workers-registry');

let worker;

beforeAll(async () => {
    worker = await WorkersRegistry.workerGetOne('7777');
});
jest
    .spyOn(WorkersRegistry, 'workerGetOne')
    .mockImplementation(async (worker_id) => {
        return new WorkersRegistry({
            worker_id,
            first_name: 'Example',
            last_name: 'Example2',
        });
    });

test('Checking worker registry', async () => {
    expect(worker).toBeDefined();
});