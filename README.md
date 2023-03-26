# PROJECT OF SHOP

## TABLE OF CONTENT

- ABOUT
- RUNNING THE APPLICATION
- JWT CONFIGURATION AND ENDPOINTS
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

## JWT CONFIGURATION

### Endpoints of authentication
Disclaimer : </br>
Expiration of token is set on 3600 seconds (one hour) and refresh token on 86400 sec (24 hours). You can change this in "config.json" file.
#### User login
- POST</br>
Link : http://0.0.0.0:3000/api/login </br>

In JSON insert (POST method) :
```
{
	"email": "test@google.com",
	"name": "Rafal"
}
```
Data of body above is an example. You can send any data in email and name fields. </br>
<p>
<a ><img src="https://i.ibb.co/kh5SNjx/Login.png" alt="Login of new user"/></a>
</p>


#### Checking the token
- GET </br>
Link : http://0.0.0.0:3000/api/secure </br>

In Headers section insert two keys and values : (GET method) :
- Content-Type(key) ; application/JSON(value)
- x-access-token(key) ; getting token(value)
<p>
<a ><img src="https://i.ibb.co/1qVKXnd/Token-proper.png" alt=„Login with good token” /></a>
</p> </br>

Login with bad token :
<p>
<a ><img src="https://i.ibb.co/SRggmC8/Token-bad.png" alt=„Login with bad token” /></a>
</p>

#### Getting new token
- POST
Link : http://0.0.0.0:3000/api/token </br>
In JSON insert (POST method) :
```
{
	"email": "test@google.com",
	"name": "Rafal",
	"refreshToken": "getting refresh token"
}
```
<p>
<a ><img src="https://i.ibb.co/Y0D0t8Q/New-token.png" alt=„Getting new token” /></a>
</p>

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
- 200 OK /item has been removed/
- 400 Bad request /error request on client side/



## Clients of shop endpoints
GET / users (shows all users)</br>
Example :
www.shop.com/users </br>
Returns :
```
[
{
"userId": "1",
"name": "aaaaaaaaaa",
"surname": "bbbbbbb",
"age": "33"
},
{
"userId": "2",
"name": "cccccccccc",
"surname": "dddddddd",
"age": "34"
},
{
"userId": "3",
"name": "eeeeeeee",
"surname": "ffffffff",
"age": "35"
}
]
```


GET / user/:id</br>
Example :
www.shop.com/pants/?id=123e4567-e89b-12d3-a456-426614174000 </br>

```
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
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

POST / user (adding new user and id to them)</br>
Example:
www.shop.com/user </br>
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
DELETE / user/:id (removing user with declared id)</br>
Example :
www.shop.com/user/?id=123e4567-e89b-12d3-a456-426614174000 </br>
```
{
    "isSuccess": true,
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
```
#### Response code to verb DELETE :
- 200 OK /item has been removed/
- 400 Bad request /error request on client side/


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
- 200 OK /item has been removed/
- 400 Bad request /error request on client side/