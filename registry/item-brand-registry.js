const { v4 : uuid } = require('uuid');
const { pool } = require('../utils/db');

class BrandRegistry {
    constructor(obj) {
        if (!obj.brand_name || obj.brand_name.length < 3 || obj.brand_name > 255) {
            throw new Error('Brand name must have between 3 and 255 chars.');
        }
        this.brand_id = obj.brand_id;
        this.brand_name = obj.brand_name;
    }
    async insert(){
        if (!this.brand_id) {
            this.brand_id = uuid();
        }
        await pool.execute("INSERT INTO `item_brand`(`brand_id`, `brand_name`) VALUES(:brand_id, :brand_name)", {
            brand_id: this.brand_id,
            brand_name: this.brand_name,
        });
        return this.brand_id;
    }
    static async listAll(){
        const [ brand ] = await pool.execute("SELECT * FROM `item_brand` ORDER BY `brand_name` ASC");
        return brand.map(obj => new BrandRegistry(obj));
    }
    static async brandGetOne(brand_id){
        const [ results ] = await pool.execute("SELECT * FROM `item_brand` WHERE `brand_id` = :brand_id", {
            brand_id,
        });
        return results.length === 0 ? null : new BrandRegistry(results[0]);
    }

    static async delete(brand_id) {
        await pool.execute("DELETE FROM `item_brand` WHERE `brand_id` = :brand_id", {
            brand_id,
        });
    }

    async update() {
        await pool.execute("UPDATE `item_brand` SET `brand_name` = :brand_name WHERE `brand_id` = :brand_id", {
            brand_id: this.brand_id,
            brand_name: this.brand_name,
        });
    };
}

module.exports = {
    BrandRegistry,
};