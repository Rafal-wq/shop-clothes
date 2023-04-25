const { v4 : uuid } = require('uuid');
const { pool } = require('../utils/db');

class ItemRegistry {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name > 255) {
            throw new Error('Name of item must have between 3 and 255 chars.');
        }
        this.item_id = obj.item_id;
        this.name = obj.name;
        this.brand_id = obj.brand_id;
        this.category_id = obj.category_id;
        this.size = obj.size;
    }
    async insert(){
        if (!this.item_id) {
            this.item_id = uuid();
        }
        await pool.execute("INSERT INTO `items`(`item_id`, `name`, `brand_id`, `category_id`, `size`) VALUES(:item_id, :name, :brand_id, :category_id, :size)", {
            item_id: this.item_id,
            name: this.name,
            brand_id: this.brand_id,
            category_id: this.category_id,
            size: this.size,
        });
        return this.item_id;
    }
    static async listAll(){
        const [ items ] = await pool.execute("SELECT * FROM `items` ORDER BY `name` ASC");
        return items.map(obj => new ItemRegistry(obj));
    }
    static async itemGetOne(item_id){
        const [ results ] = await pool.execute("SELECT `name`, `brand_id`, `size` FROM `items` WHERE `item_id` = :item_id", {
            item_id,
        });
        return results.length === 0 ? null : new ItemRegistry(results[0]);
    }

    static async delete(item_id) {
        await pool.execute("DELETE FROM `items` WHERE `item_id` = :item_id", {
            item_id,
        });
    }

    async update() {
        await pool.execute("UPDATE `items` SET `name` = :name, `size` = :size WHERE `item_id` = :item_id", {
            item_id: this.item_id,
            name: this.name,
            size: this.size,
        });
    };
}

module.exports = {
    ItemRegistry,
};