Simple REST API with Express.js

Overview

This project is a basic REST API built using Express.js. It demonstrates CRUD operations with an in-memory datastore.

Setup Instructions

1. Clone the repository or download the files.


2. Run npm install to install dependencies.


3. Start the server with:

node app.js


4. API runs on: http://localhost:3000



API Endpoints

Root

GET / Response: Hello, World!


Items

GET /items Returns all items.

GET /items/:id Returns a single item by ID.

POST /items Creates a new item. Request Body:

{
  "name": "New Item",
  "description": "This is a new item"
}

PUT /items/:id Updates an item by ID. Request Body:

{
  "name": "Updated Name",
  "description": "Updated Description"
}

DELETE /items/:id Deletes an item by ID.


Error Handling

400: Missing name or description

404: Item not found or route not found

500: Internal server error


Example Requests (Postman)

Create Item (POST /items)

POST http://localhost:3000/items
Body:
{
  "name": "Test Item",
  "description": "This is a test"
}

Get All Items (GET /items)

GET http://localhost:3000/items

Get Single Item (GET /items/1)

GET http://localhost:3000/items/1

Update Item (PUT /items/1)

PUT http://localhost:3000/items/1
Body:
{
  "name": "Updated",
  "description": "Updated info"
}

Delete Item (DELETE /items/1)

DELETE http://localhost:3000/items/1

