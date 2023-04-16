# PROJECT OF SHOP

## TABLE OF CONTENT

- ABOUT
- RUNNING THE APPLICATION
- DATABASE CONFIGURATION
  - Schema
  - SQL commands
- ENDPOINTS
  - Items /clothes/
    - GET
    - POST
    - PUT
    - DELETE
  - Clients /users/
    - GET
    - POST
    - PUT
    - DELETE
  - Staff /workers/
    - GET
    - POST
    - PUT
    - DELETE

## About
Shop (goods, staff, customers), question: a buyer has come, wants to buy a specific outfit of clothes for such a size, to highlight what can be offered to him.

## RUNNING THE APPLICATION

#### Clone application
```
$ git clone https://github.com/Rafal-wq/shop-clothes.git
```

#### To run the application :
```
$ node index.js
```
You can also use script contained in package.json file.

## DATABASE CONFIGURATION

### Schema of database

<p>
<a ><img src="https://i.ibb.co/sbW9WP5/SQL-schema-new.png" alt="Schema of database"/></a>
</p>

### SQL commands :

```
$
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
```


## ITEMS ENDPOINTS

### Items (clothes) in shop - getting verbs
GET / items (shows all clothes from shop)</br>
Example :
www.shop.com </br> 
Returns :
```
[
{
"productId": "1",
"typeOfProduct": "shirt",
"size": "42",
},
{
"productId": "2",
"typeOfProduct": "pants",
"size": "40",
},
{
"productId": "3",
"typeOfProduct": "t-shirt",
"size": "44",
}
]
```
GET / items/:type (shows looking for type of outfits)</br>
Example :
www.shop.com/?type=shirt </br>
```
[
{
    "productId": "1",
    "typeOfProduct": "shirt",
    "size": "42",
},
{
    "productId": "2",
    "typeOfProduct": "shirt",
    "size": "40",
},
{
    "productId": "3",
    "typeOfProduct": "shirt",
    "size": "44",
}
]
```

GET / items/:type/:size (shows looking for type of outfits in searching size)</br>
Example :
www.shop.com/?type=pants&size=42 </br>

```
{
    "productId": "1",
    "typeOfProduct": "pants",
    "size": "42",
}
```

#### Response code to verb GET :
  - 200 OK /you get correct response/
  - 400 Bad request /error request on client side/
  - 500 Internal server error
  - 501 Item not implemented

### Items POST verb
  
POST / item (adding new item with described type and size, adding id of item also)</br>
Example:
www.shop.com/item </br>
```
{
    "isSuccess": true,
    "id": "3d09cdc4-e972-4341-810f-78841944303e"
}
```

#### Response code to verb POST :
- 201 OK /item has been added/
- 400 Bad request /error request on client side/



### Response code to PUT verb :
PUT / item/:id (make changes in item with declared id)</br>
Example :
www.shop.com/pants/?id=123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb PUT :
- 200 OK /item has been changed/
- 400 Bad request /error request on client side/

### Items DELETE verb
DELETE / item/:id (removing item with declared id)</br>
Example :
www.shop.com/pants/?id=123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb DELETE :
- 201 OK /item has been removed/
- 400 Bad request /error request on client side/



## Clients of shop endpoints
GET user/users (shows all users)</br>
Example :
www.shop.com/user/users </br>
Returns :
```
[
	{
		"customer_id": "1a06c740-99f4-49b5-b348-797315af7ff1",
		"first_name": "test2",
		"last_name": "test2",
		"phone": "222333444",
		"email": "example2@gmail.com",
		"street": "test2",
		"city": "test2",
		"zip_code": "23456"
	},
	{
		"customer_id": "5bcd4cbc-aa38-45f2-91cd-1b9ab2072f58",
		"first_name": "test",
		"last_name": "test",
		"phone": "111222333",
		"email": "example@gmail.com",
		"street": "test",
		"city": "test",
		"zip_code": "12345"
	}
]
```
<p>
<a ><img src="https://i.ibb.co/Yf1FGcH/getAll.png" alt="Getting all users data"/></a>
</p>

GET user/users/:id</br>
Example :
www.shop.com/user/users/1a06c740-99f4-49b5-b348-797315af7ff1 </br>

```
{
	"customer_id": "1a06c740-99f4-49b5-b348-797315af7ff1",
	"first_name": "test2",
	"last_name": "test2",
	"phone": "222333444",
	"email": "example2@gmail.com",
	"street": "test2",
	"city": "test2",
	"zip_code": "23456"
}
```

#### Response code to verb GET :
- 200 OK /you get correct response/
- 400 Bad request /error request on client side/
- 500 Internal server error


### Items POST verb

POST / user (adding new user and id to them)</br>
Example:
www.shop.com/user </br>
```
{
	"isSuccess": true,
	"id": "1a06c740-99f4-49b5-b348-797315af7ff1"
}
```
<p>
<a ><img src="https://i.ibb.co/c8B8ghQ/post-created.png" alt="Creating new user"/></a>
</p>

#### Response code to verb POST :
- 201 OK /user has been added/
- 400 Bad request /error request on client side/



### Response code to PUT verb :
PUT / user/:id (make changes in user with declared id)</br>
Example :
www.shop.com/user/?id=123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb PUT :
- 200 OK /user data has been changed/
- 400 Bad request /error request on client side/

### Items DELETE verb
DELETE user/users/:id (removing user with declared id)</br>
Example :
www.shop.com/user/users/a384c07a-cc84-4b1e-8f1f-e5d85a8e86b0 </br>
```
{
	"isSuccess": true,
	"id": "a384c07a-cc84-4b1e-8f1f-e5d85a8e86b0"
}
```
#### Response code to verb DELETE :
- 200 OK /item has been removed/
- 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
- 204 (No Content) status code if the action has been enacted and no further information is to be supplied.


## Workers of shop endpoints
GET / staff (shows all workers)</br>
Example :
www.shop.com/staff </br>
Returns :
```
[
{
"staffId": "1",
"name": "aaaaaaaaaa",
"surname": "bbbbbbb",
"age": "33"
},
{
"staffId": "2",
"name": "cccccccccc",
"surname": "dddddddd",
"age": "34"
},
{
"staffId": "3",
"name": "eeeeeeee",
"surname": "ffffffff",
"age": "35"
}
]
```


GET / staff/:id</br>
Example :
www.shop.com/staff/?id=123e4567-e89b-12d3-a456-426614174000 </br>

```
{
  "staffId": "123e4567-e89b-12d3-a456-426614174000",
  "name": "aaaaaaaaaa",
  "surname": "bbbbbbb",
  "age": "33"
}
```

#### Response code to verb GET :
- 200 OK /you get correct response/
- 400 Bad request /error request on client side/
- 500 Internal server error
- 501 Item not implemented


### Items POST verb

POST / staff (adding new worker and give id to them)</br>
Example:
www.shop.com/staff </br>
```
{
    "isSuccess": true,
    "id": "3d09cdc4-e972-4341-810f-78841944303e"
}
```

#### Response code to verb POST :
- 201 OK /user has been added/
- 400 Bad request /error request on client side/



### Response code to PUT verb :
PUT / staff/:id (make changes in user with declared id)</br>
Example :
www.shop.com/staff/?id=123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb PUT :
- 200 OK /user data has been changed/
- 400 Bad request /error request on client side/

### Items DELETE verb
DELETE / staff/:id (removing user with declared id)</br>
Example :
www.shop.com/staff/?id=123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb DELETE :
- 201 OK /item has been removed/
- 400 Bad request /error request on client side/
