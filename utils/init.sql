CREATE DATABASE IF NOT EXISTS solvd_shop_docker
USE solvd_shop_docker
CREATE TABLE IF NOT EXISTS workers (
	worker_id INT PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	email VARCHAR (255) NOT NULL UNIQUE,
	phone VARCHAR (25),
	isActive tinyint NOT NULL,
	store_id INT NOT NULL
);
CREATE TABLE IF NOT EXISTS category (
	category_id INT PRIMARY KEY,
	category_name VARCHAR (255) NOT NULL
);
CREATE TABLE IF NOT EXISTS item_brand (
	brand_id INT PRIMARY KEY,
	brand_name VARCHAR (255) NOT NULL
);
CREATE TABLE IF NOT EXISTS items (
	item_id INT PRIMARY KEY,
	name VARCHAR (45) NOT NULL,
	brand_id INT NOT NULL,
	category_id INT NOT NULL,
	size INT NOT NULL,
	FOREIGN KEY (category_id)
        REFERENCES category (category_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (brand_id)
        REFERENCES item_brand (brand_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS customer (
	customer_id INT PRIMARY KEY,
	first_name VARCHAR (255) NOT NULL,
	last_name VARCHAR (255) NOT NULL,
	phone VARCHAR (25),
	email VARCHAR (255) NOT NULL,
	street VARCHAR (255),
	city VARCHAR (50),
	zip_code VARCHAR (5)
);
CREATE TABLE IF NOT EXISTS orders (
	order_id INT PRIMARY KEY,
	order_date DATE NOT NULL,
	item_id INT,
	worker_id INT NOT NULL,
	customer_id INT,
	FOREIGN KEY (item_id)
        REFERENCES items (item_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (worker_id)
        REFERENCES workers (worker_id)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
	FOREIGN KEY (customer_id)
        REFERENCES customer (customer_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);