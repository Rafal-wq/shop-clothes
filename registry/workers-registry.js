const { v4 : uuid } = require('uuid');
const { pool } = require('../utils/db');

class WorkersRegistry {
    constructor(obj) {
        if (!obj.first_name || obj.first_name.length < 3 || obj.first_name > 255) {
            throw new Error('First name must have between 3 and 255 chars.');
        }
        this.worker_id = obj.worker_id;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.phone = obj.phone;
        this.email = obj.email;
        this.isActive = obj.isActive;
    }
    async insert(){
        if (!this.worker_id) {
            this.worker_id = uuid();
        }
        await pool.execute("INSERT INTO `workers`(`worker_id`, `first_name`, `last_name`, `phone`, `email`, `isActive`) VALUES(:worker_id, :first_name, :last_name, :phone, :email, :isActive)", {
            worker_id: this.worker_id,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            email: this.email,
            isActive: this.isActive,
        });
        return this.worker_id;
    }
    static async listAll(){
        const [ workers ] = await pool.execute("SELECT * FROM `workers` ORDER BY `first_name` ASC");
        return workers.map(obj => new WorkersRegistry(obj));
    }
    static async workerGetOne(worker_id){
        const [ results ] = await pool.execute("SELECT `first_name`, `last_name` FROM `workers` WHERE `worker_id` = :worker_id", {
            worker_id,
        });
        return results.length === 0 ? null : new WorkersRegistry(results[0]);
    }

    static async delete(worker_id) {
        await pool.execute("DELETE FROM `workers` WHERE `worker_id` = :worker_id", {
            worker_id,
        });
    };
}

module.exports = {
    WorkersRegistry,
};