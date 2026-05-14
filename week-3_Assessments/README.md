# Backend 2: Advanced Express.js with MongoDB

A comprehensive full-stack backend demonstration using Express.js, Mongoose, and JWT Authentication.

## Features
- **JWT Authentication**: Secure login flow with JSON Web Tokens stored in HttpOnly cookies.
- **Mongoose Integration**: Modular schemas for Users and Products with automatic validation.
- **Protected Routes**: Middleware (`verifyToken`) to restrict access to sensitive endpoints.
- **Shopping Cart Logic**: Dynamic cart management (Add/Update/Delete) with Mongoose sub-documents.
- **Enhanced Error Handling**: Centralized middleware to handle Validation, Cast, and Server errors.
- **Environment Configuration**: Uses `dotenv` for secure management of database URLs and secrets.

## Tech Stack
- **Node.js & Express.js**: Server framework.
- **MongoDB & Mongoose**: Database and ODM.
- **Bcrypt.js**: Password hashing for security.
- **JSONWebToken**: Secure authentication.
- **Cookie-Parser**: Handling client-side tokens.

## Project Structure
- `server.js`: Application entry point and DB connection logic.
- `model/`: Mongoose schemas (`UserModel.js`, `ProductModel.js`).
- `APIs/`: Controller/Route logic (`userAPI.js`, `productAPI.js`).
- `middlewares/`: Security and validation logic (`verifyToken.js`).
- `auth/`: Authentication utilities.

## Setup Instructions
1. Navigate to the `backend2` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your environment in `.env`:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/backendDB
   PORT=4000
   JWT_SECRET=your_secret_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Key API Endpoints
### User & Auth
- `POST /user-api/auth`: Login and receive HttpOnly cookie.
- `POST /user-api/users`: Register a new user.
- `GET /user-api/user`: Get current logged-in user profile.
- `PUT /user-api/cart/product-id/:pid`: Add a product to the user's cart.

### Products
- `GET /product-api/products`: Retrieve all products.
- `POST /product-api/product`: Add a new product to the database.