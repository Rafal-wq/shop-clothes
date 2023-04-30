const { v4 : uuid } = require('uuid');
const { pool } = require('../utils/db');

class UserRegistry {
    constructor(obj) {
        if (!obj.first_name || obj.first_name.length < 3 || obj.first_name > 255) {
            throw new Error('First name must have between 3 and 255 chars.');
        }
        this.customer_id = obj.customer_id;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.phone = obj.phone;
        this.email = obj.email;
        this.street = obj.street;
        this.city = obj.city;
        this.zip_code = obj.zip_code;
    }
    async insert(){
        if (!this.customer_id) {
            this.customer_id = uuid();
        }
        await pool.execute("INSERT INTO `customer`(`customer_id`, `first_name`, `last_name`, `phone`, `email`, `street`, `city`, `zip_code`) VALUES(:customer_id, :first_name, :last_name, :phone, :email, :street, :city, :zip_code)", {
            customer_id: this.customer_id,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            email: this.email,
            street: this.street,
            city: this.city,
            zip_code: this.zip_code,
        });
        return this.customer_id;
    }
    static async listAll(){
        const [ customers ] = await pool.execute("SELECT * FROM `customer` ORDER BY `first_name` ASC");
        return customers.map(obj => new UserRegistry(obj));
    }
    static async customerGetOne(customer_id){
        const [ results ] = await pool.execute("SELECT `first_name`, `last_name` FROM `customer` WHERE `customer_id` = :customer_id", {
            customer_id,
        });
        return results.length === 0 ? null : new UserRegistry(results[0]);
    }

    static async delete(customer_id) {
        await pool.execute("DELETE FROM `customer` WHERE `customer_id` = :customer_id", {
            customer_id,
        });
    }

    async update() {
        await pool.execute("UPDATE `customer` SET `first_name` = :first_name, `last_name` = :last_name, `phone` = :phone, `email` = :email, `street` = :street, `city` = :city, `zip_code` = :zip_code WHERE `customer_id` = :customer_id", {
            customer_id: this.customer_id,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            email: this.email,
            street: this.street,
            city: this.city,
            zip_code: this.zip_code,
        });
    };
}

module.exports = {
    UserRegistry,
};
