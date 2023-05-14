CREATE DATABASE IF NOT EXISTS `solvd_shop`;
USE `solvd_shop`;
CREATE TABLE workers (
	worker_id VARCHAR (36) PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	email VARCHAR (255) NOT NULL UNIQUE,
	phone VARCHAR (25),
	isActive tinyint NOT NULL
);
CREATE TABLE category (
	category_id VARCHAR (36) PRIMARY KEY,
	category_name VARCHAR (255) NOT NULL
);
CREATE TABLE item_brand (
	brand_id VARCHAR (36) PRIMARY KEY,
	brand_name VARCHAR (255) NOT NULL
);
CREATE TABLE items (
	item_id VARCHAR (36) PRIMARY KEY,
	name VARCHAR (45) NOT NULL,
	brand_id VARCHAR (36) NOT NULL,
	category_id VARCHAR (36) NOT NULL,
	size INT NOT NULL,
	FOREIGN KEY (category_id)
        REFERENCES category (category_id)
        ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (brand_id)
        REFERENCES item_brand (brand_id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE customer (
	customer_id VARCHAR (36) PRIMARY KEY,
	first_name VARCHAR (255) NOT NULL,
	last_name VARCHAR (255) NOT NULL,
	phone VARCHAR (25),
	email VARCHAR (255) NOT NULL,
	street VARCHAR (255),
	city VARCHAR (50),
	zip_code VARCHAR (5)
);
CREATE TABLE orders (
	order_id VARCHAR (36) PRIMARY KEY,
	order_date DATE NOT NULL,
	item_id VARCHAR (36),
	worker_id VARCHAR (36) NOT NULL,
	customer_id VARCHAR (36),
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