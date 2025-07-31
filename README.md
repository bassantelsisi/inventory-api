# inventory-api

# Inventory Management API

A simple Node.js and Express.js API for managing inventory items. Includes user authentication with JWT, and MongoDB for storage.

## Features

- User registration and login
- JWT-based authentication
- Add, view, update, and delete inventory items
- RESTful API structure
- Input validation using Joi

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for auth
- Joi for validation

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bassantelsisi/inventory-api
cd inventory-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm start
```

The server will run at http://localhost:5000.

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Items
- `GET /api/items` (auth required)
- `POST /api/items` (auth required)
- `GET /api/items/:id`
- `PUT /api/items/:id`
- `DELETE /api/items/:id`