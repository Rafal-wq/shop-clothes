# PROJECT OF SHOP

## TABLE OF CONTENT

Here will be

## About
Shop (goods, staff, customers), question: a buyer has come, wants to buy a specific outfit of clothes for such a size, to highlight what can be offered to him.


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
GET / user (shows all users)</br>
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
- 201 OK /item has been removed/
- 400 Bad request /error request on client side/


## Clients of shop endpoints
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