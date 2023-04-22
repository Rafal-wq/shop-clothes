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
  - Category /item's category/
    - GET
    - POST
    - PUT
    - DELETE
  - Brand /item's brand/
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
GET item/items (shows all clothes from shop)</br>
Example :
www.shop.com/item/items </br> 
Returns :
```
[
	{
		"item_id": "70ce51e9-7059-448d-8e2d-75d5eb2845f3",
		"name": "coat",
		"brand_id": "115389e8-6ad4-45aa-8866-656985d181a8",
		"category_id": "719c0745-d416-4fb6-baba-c159b57d7946",
		"size": 8
	},
	{
		"item_id": "284c51cd-79f4-443a-8d25-fb622c9b9425",
		"name": "jeans",
		"brand_id": "167d3ced-90e0-440e-a55b-cf36982d453b",
		"category_id": "795a44f5-d573-4a54-a7b0-a408a3fcd6c5",
		"size": 10
	},
	{
		"item_id": "4f578c38-e0fb-11ed-8a72-9dd658370987",
		"name": "shirt",
		"brand_id": "167d3ced-90e0-440e-a55b-cf36982d453b",
		"category_id": "6a233b80-2afc-4d71-9e19-5efea109eb06",
		"size": 8
	}
]
```
<p>
<a ><img src="https://i.ibb.co/BqsdScK/item-get-All.png" alt="Getting all clothes data"/></a>
</p>

#### One item
GET item/items/:id (shows looking for type of outfits by id)</br>
Example :
www.shop.com/item/items/70ce51e9-7059-448d-8e2d-75d5eb2845f3 </br>
```
{
	"item_id": "70ce51e9-7059-448d-8e2d-75d5eb2845f3",
	"name": "coat",
	"brand_id": "115389e8-6ad4-45aa-8866-656985d181a8",
	"category_id": "719c0745-d416-4fb6-baba-c159b57d7946",
	"size": 8
}
```
<p>
<a ><img src="https://i.ibb.co/MSdxDjn/item-get-One.png" alt="Getting one clothes item data"/></a>
</p>

#### Response code to verb GET :
  - 200 OK /you get correct response/
  - 400 Bad request /error request on client side/
  - 500 Internal server error
  - 501 Item not implemented

### Items POST verb
  
POST /item (adding new item with described type and size, adding id of item also)</br>
Example:
www.shop.com/item </br>
```
{
	"isSuccess": true,
	"id": "284c51cd-79f4-443a-8d25-fb622c9b9425"
}
```
<p>
<a ><img src="https://i.ibb.co/qDM6QZC/item-post.png" alt="Adding clothes item"/></a>
</p>

#### Response code to verb POST :
- 201 OK /item has been added/
- 400 Bad request /error request on client side/



### Response code to PUT verb :
PUT /item/items/:id (make changes in item with declared id)</br>
Example :
www.shop.com/item/items/284c51cd-79f4-443a-8d25-fb622c9b9425 </br>
```
{
    "isSuccess": true,
    "id": "284c51cd-79f4-443a-8d25-fb622c9b9425"
}
```
#### Response code to verb PUT :
- 200 OK /item has been changed/
- 400 Bad request /error request on client side/

### Items DELETE verb
DELETE / item/items/:id (removing item with declared id)</br>
Example :
www.shop.com/item/items/70ce51e9-7059-448d-8e2d-75d5eb2845f3 </br>
```
{
	"isSuccess": true,
	"id": "70ce51e9-7059-448d-8e2d-75d5eb2845f3"
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
<p>
<a ><img src="https://i.ibb.co/StMv95H/getOne.png" alt="Getting one user data"/></a>
</p>

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

POST / user (adding new user and setting id to them)</br>
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

<p>
<a ><img src="https://i.ibb.co/p2dYmj2/delete.png" alt="Creating new user"/></a>
</p>
<br/>
After deleting :

<p>
<a ><img src="https://i.ibb.co/KXWpXbB/get-All-after-delete.png" alt="Creating new user"/></a>
</p>
<br/>

- 200 OK /item has been removed/
- 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
- 204 (No Content) status code if the action has been enacted and no further information is to be supplied.


## Workers of shop endpoints
GET worker/workers (shows all workers)</br>
Example :
www.shop.com/worker/workers </br>
Returns :
```
[
	{
		"worker_id": "c24b7013-78c8-4a61-a58e-434c9dbe16a9",
		"first_name": "John",
		"last_name": "test",
		"phone": "123123123",
		"email": "example@gmail.com",
		"isActive": 1
	},
	{
		"worker_id": "ba7c6769-d944-438f-b350-304d0b679be6",
		"first_name": "John2",
		"last_name": "test2",
		"phone": "123123123",
		"email": "example2@gmail.com",
		"isActive": 1
	}
]
```
<p>
<a ><img src="https://i.ibb.co/nccVdN3/wrokers-All.png" alt="Getting all workers data"/></a>
</p>

GET worker/workers/:id</br>
Example :
www.shop.com/worker/workers/c24b7013-78c8-4a61-a58e-434c9dbe16a9 </br>

```
{
	"worker_id": "c24b7013-78c8-4a61-a58e-434c9dbe16a9",
	"first_name": "John",
	"last_name": "test",
	"phone": "123123123",
	"email": "example@gmail.com",
	"isActive": 1
}
```
<p>
<a ><img src="https://i.ibb.co/HNYjz4m/worker-one.png" alt="Getting one worker data"/></a>
</p>


#### Response code to verb GET :
- 200 OK /you get correct response/
- 400 Bad request /error request on client side/
- 500 Internal server error
- 501 Item not implemented


### Items POST verb

POST /worker (adding new worker and set id to them)</br>
Example:
www.shop.com/worker </br>
Response :
```
{
	"isSuccess": true,
	"id": "cdd5459d-6384-4d55-a56b-740c04c4eb49"
}
```
<p>
<a ><img src="https://i.ibb.co/b6qH8CD/worker-post.png" alt="Adding worker"/></a>
</p>


#### Response code to verb POST :
- 201 OK /user has been added/
- 400 Bad request /error request on client side/



### Response code to PUT verb :
PUT / staff/:id (make changes in user with declared id)</br>
Example :
www.shop.com/worker/workers/?id=123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb PUT :
- 200 OK /worker data has been changed/
- 400 Bad request /error request on client side/

### Items DELETE verb
DELETE /worker/workers/:id (removing worker with declared id)</br>
Example :
www.shop.com/worker/workers/cdd5459d-6384-4d55-a56b-740c04c4eb49 </br>
Response :
```
{
	"isSuccess": true,
	"id": "cdd5459d-6384-4d55-a56b-740c04c4eb49"
}
```
<p>
<a ><img src="https://i.ibb.co/0hj1Cf3/worker-delete.png" alt="Removing worker"/></a>
</p>


#### Response code to verb DELETE :
- 201 OK /staff has been removed/
- 400 Bad request /error request on client side/
<br/>


## Categories of clothes endpoints
GET category/categories (shows all categories of clothes)</br>
Example :
www.shop.com/category/categories </br>
Returns :
```
[
	{
		"category_id": "719c0745-d416-4fb6-baba-c159b57d7946",
		"category_name": "jacket"
	},
	{
		"category_id": "795a44f5-d573-4a54-a7b0-a408a3fcd6c5",
		"category_name": "jeans"
	},
	{
		"category_id": "6a233b80-2afc-4d71-9e19-5efea109eb06",
		"category_name": "pants"
	},
	{
		"category_id": "8128d3e7-6c94-4b47-bf8d-0015b5c5b799",
		"category_name": "shoes"
	}
]
```
<p>
<a ><img src="https://i.ibb.co/Dtnywf6/category-get-All.png" alt="Getting all categories of clothes data"/></a>
</p>

GET category/categories/:id</br>
Example :
www.shop.com/category/categories/6a233b80-2afc-4d71-9e19-5efea109eb06 </br>

```
{
	"category_id": "6a233b80-2afc-4d71-9e19-5efea109eb06",
	"category_name": "pants"
}
```
<br/>
<p>
<a ><img src="https://i.ibb.co/9ngvpMw/category-get-One.png" alt="Getting one category of clothes data"/></a>
</p>

#### Response code to verb GET :
- 200 OK /you get correct response/
- 400 Bad request /error request on client side/
- 500 Internal server error


### Items POST verb

POST / category (adding new category and setting id to them)</br>
Example:
www.shop.com/category </br>
```
{
	"isSuccess": true,
	"id": "795a44f5-d573-4a54-a7b0-a408a3fcd6c5"
}
```
<p>
<a ><img src="https://i.ibb.co/5TtdMYL/category-post.png" alt="Creating new category"/></a>
</p>

#### Response code to verb POST :
- 201 OK /user has been added/
- 400 Bad request /error request on client side/



### Response code to PUT verb :
PUT / user/:id (make changes in user with declared id)</br>
Example :
www.shop.com/category/123e4567-e89b-12d3-a456-426614174000 </br>
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
DELETE category/categories/:id (removing category with declared id)</br>
Example :
www.shop.com/category/categories/9ec04c6f-9aec-4248-a366-59a6d32db96c </br>
```
{
	"isSuccess": true,
	"id": "9ec04c6f-9aec-4248-a366-59a6d32db96c"
}
```
#### Response code to verb DELETE :

<p>
<a ><img src="https://i.ibb.co/TRyQwxk/delete.png" alt="Deleting category"/></a>
</p>
<br/>


- 200 OK /category has been removed/
- 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
- 204 (No Content) status code if the action has been enacted and no further information is to be supplied.
<br/>

## Brands of clothes endpoints
GET brand/brands (shows all brands of clothes)</br>
Example :
www.shop.com/brand/brands </br>
Returns :
```
[
	{
		"brand_id": "167d3ced-90e0-440e-a55b-cf36982d453b",
		"brand_name": "h&m"
	},
	{
		"brand_id": "176d64e6-b339-4460-ae45-158bc0be2fa1",
		"brand_name": "hollister"
	},
	{
		"brand_id": "115389e8-6ad4-45aa-8866-656985d181a8",
		"brand_name": "zara"
	}
]
```
<p>
<a ><img src="https://i.ibb.co/vZP7TN4/get-all.png" alt="Getting all brands of clothes data"/></a>
</p>

GET category/categories/:id</br>
Example :
www.shop.com/brand/brands/167d3ced-90e0-440e-a55b-cf36982d453b </br>

```
{
	"brand_id": "167d3ced-90e0-440e-a55b-cf36982d453b",
	"brand_name": "h&m"
}
```
<br/>
<p>
<a ><img src="https://i.ibb.co/4jy8vgh/get-one.png" alt="Getting one brand of clothes data"/></a>
</p>

#### Response code to verb GET :
- 200 OK /you get correct response/
- 400 Bad request /error request on client side/
- 500 Internal server error


### Items POST verb

POST / brand (adding new brand and setting id to them)</br>
Example:
www.shop.com/brand </br>
```
{
	"isSuccess": true,
	"id": "167d3ced-90e0-440e-a55b-cf36982d453b"
}
```
<p>
<a ><img src="https://i.ibb.co/pzfvXdp/post.png" alt="Creating new item brand"/></a>
</p>

#### Response code to verb POST :
- 201 OK /user has been added/
- 400 Bad request /error request on client side/



### Response code to PUT verb :
PUT brand/brands/:id (make changes in brand with declared id)</br>
Example :
www.shop.com/brand/brands/123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb PUT :
- 200 OK /brand data has been changed/
- 400 Bad request /error request on client side/

### Items DELETE verb
DELETE brand/brands/:id (removing brand with declared id)</br>
Example :
www.shop.com/brand/brands/176d64e6-b339-4460-ae45-158bc0be2fa1 </br>
```
{
	"isSuccess": true,
	"id": "176d64e6-b339-4460-ae45-158bc0be2fa1"
}
```
#### Response code to verb DELETE :

<p>
<a ><img src="https://i.ibb.co/PGmfkWZ/delete.png" alt="Deleting brand data"/></a>
</p>
<br/>


- 200 OK /category has been removed/
- 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
- 204 (No Content) status code if the action has been enacted and no further information is to be supplied.
