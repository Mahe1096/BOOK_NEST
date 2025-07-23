# BookNest API

A secure, RESTful API for user authentication and book management built with **Node.js**, **Express**, and **MongoDB Atlas**. This project includes input validation, centralized error handling, rate limiting, Docker deployment, and interactive Swagger documentation.

---

## Features

- ✅ User Registration & Login with JWT
- ✅ Authenticated CRUD operations for Books
- ✅ Input validation with Joi
- ✅ Rate limiting on login/signup
- ✅ MongoDB Atlas for cloud-based database
- ✅ Swagger API documentation
- ✅ Docker + Docker Compose setup
- ✅ Helmet, XSS-clean, Mongo-sanitize for security

---

## Project Structure

booknest-api/
├── src/
│ ├── app.js
│ ├── server.js
│ ├── config/
│ │ ├── db.js
│ │ └── docs/
│ │ └── swagger.js
│ ├── controllers/
│ ├── middlewares/
│ ├── routes/
│ ├── utils/
│ └── validators/
├── Dockerfile
├── docker-compose.yml
├── .env
├── package.json
└── README.md

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/your-username/booknest-api.git
cd booknest-api

2. Install dependencies

npm install

3. Create a .env file

   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/booknest?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret

4. Run the app locally

   npm start

   Access:

API base URL: http://localhost:5000

Swagger UI: http://localhost:5000/api-docs

Docker Setup

1. Build and start using Docker Compose

   docker-compose up --build
   Docker will use the Dockerfile to build the app

Exposes the app on port 5000

MongoDB Atlas is used as a managed database (no local container needed)

API Endpoints
Method Endpoint Description
POST /api/auth/signup Register a new user
POST /api/auth/login Login and receive token
GET /api/books Get all books (Auth req)
POST /api/books Add a book (Auth req)
PUT /api/books/:id Update a book (Auth req)
DELETE /api/books/:id Delete a book (Auth req)

API Documentation
The API is fully documented using Swagger. Once the app is running, visit:

http://localhost:5000/api-docs

Security Measures
Helmet: Secures HTTP headers

XSS-Clean: Prevents cross-site scripting

Mongo-Sanitize: Prevents NoSQL injection

Rate Limiting: Controls brute-force attempts

Tech Stack
Backend: Node.js, Express

Database: MongoDB Atlas (Cloud)

Auth: JWT

Validation: Joi

Docs: Swagger (OpenAPI 3.0)

Containerization: Docker, Docker Compose

Author
Developed by Maheswari N — 2025
