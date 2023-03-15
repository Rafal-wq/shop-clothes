# Description

## Shop with clothes schema

### Items in shop (and methods)
GET / items </br>
POST / adding new item and create basket of client</br>
PUT / item/:id (make changes in item with declarated id)</br>
DELETE / item/:id (removing item with declarated id)

### Basket with items
GET / basket/:id (content of basket)</br>
PUT / basket/:id (change the content of basket)</br>
DELETE / basket/:id</br>

### Clients of shop
GET / user/:id</br>
POST / user (adding new client)</br>
PUT / user/:id (change features of client)</br>
DELETE / user/:id