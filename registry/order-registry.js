const { v4 : uuid } = require('uuid');
const { pool } = require('../utils/db');

class OrderRegistry {
    constructor(obj) {
        this.order_id = obj.order_id;
        this.order_date = obj.order_date;
        this.item_id = obj.item_id;
        this.worker_id = obj.worker_id;
        this.customer_id = obj.customer_id;
    }
    async insert(){
        if (!this.order_id) {
            this.order_id = uuid();
        }
        if (!this.order_date) {
            const date = new Date();
            let monthDay = date.getDate();
            let month = date.getMonth()+1;
            let year = date.getFullYear();
            this.order_date = year + "-" + month + "-" + monthDay;
        }
        console.log(this.order_date);
        await pool.execute("INSERT INTO `orders`(`order_id`, `order_date`, `item_id`, `worker_id`, `customer_id`) VALUES(:order_id, :order_date, :item_id, :worker_id, :customer_id)", {
            order_id: this.order_id,
            order_date: this.order_date,
            item_id: this.item_id,
            worker_id: this.worker_id,
            customer_id: this.customer_id,
        });
        return this.order_id;
    }
    static async listAll(){
        const [ orders ] = await pool.execute("SELECT * FROM `orders` ORDER BY `order_date` DESC");
        return orders.map(obj => new OrderRegistry(obj));
    }
    static async orderGetOne(order_id){
        const [ results ] = await pool.execute("SELECT * FROM `orders` WHERE `order_id` = :order_id", {
            order_id,
        });
        return results.length === 0 ? null : new OrderRegistry(results[0]);
    }

    static async delete(order_id) {
        await pool.execute("DELETE FROM `orders` WHERE `order_id` = :order_id", {
            order_id,
        });
    };
}

module.exports = {
    OrderRegistry,
};