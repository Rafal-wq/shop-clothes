const { v4 : uuid } = require('uuid');
const { pool } = require('../utils/db');

class CategoryRegistry {
    constructor(obj) {
        if (!obj.category_name || obj.category_name.length < 3 || obj.category_name > 255) {
            throw new Error('Category name must have between 3 and 255 chars.');
        }
        this.category_id = obj.category_id;
        this.category_name = obj.category_name;
    }
    async insert(){
        if (!this.category_id) {
            this.category_id = uuid();
        }
        await pool.execute("INSERT INTO `category`(`category_id`, `category_name`) VALUES(:category_id, :category_name)", {
            category_id: this.category_id,
            category_name: this.category_name,
        });
        return this.category_id;
    }
    static async listAll(){
        const [ category ] = await pool.execute("SELECT * FROM `category` ORDER BY `category_name` ASC");
        return category.map(obj => new CategoryRegistry(obj));
    }
    static async categoryGetOne(category_id){
        const [ results ] = await pool.execute("SELECT * FROM `category` WHERE `category_id` = :category_id", {
            category_id,
        });
        return results.length === 0 ? null : new CategoryRegistry(results[0]);
    }

    static async delete(category_id) {
        const [ results ] = await pool.execute("DELETE FROM `category` WHERE `category_id` = :category_id", {
            category_id,
        });
    }

    async update() {
        await pool.execute("UPDATE `category` SET `category_name` = :category_name WHERE `category_id` = :category_id", {
            category_id: this.category_id,
            category_name: this.category_name,
        });
    };
}

module.exports = {
    CategoryRegistry,
};