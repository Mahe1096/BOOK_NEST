# BookNest API

A secure, RESTful API for user authentication and book management built with **Node.js**, **Express**, and **MongoDB Atlas**. This project includes input validation, centralized error handling, rate limiting, Docker deployment, and interactive Swagger documentation.


## Features

- User Registration & Login with JWT
- Authenticated CRUD operations for Books
- Input validation with Joi
- Rate limiting on login/signup
- MongoDB Atlas for cloud-based database
- Swagger API documentation
- Docker + Docker Compose setup
- Helmet, XSS-clean, Mongo-sanitize for security



## Project Structure

```
BOOK_NEST/
└── booknest-api/
    ├── .dockerignore
    ├── .env
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── docker-compose.yml
    ├── Dockerfile
    ├── jest.config.js
    ├── logs/
    │   ├── .8c689653ffdca412638bf778eec75d97d37db3d1-audit.json
    │   ├── .b8155ae099578ec4a1bb73341197358b5a2e0953-audit.json
    │   ├── app-error-2025-07-23.log
    │   ├── app-info-2025-07-23.log
    ├── package-lock.json
    ├── package.json
    ├── Readme.md
    ├── server.js
    ├── structure.txt
    ├── node_modules/
    │   └── .package-lock.json
    ├── src/
    │   ├── app.js
    │   ├── config/
    │   │   ├── db.js
    │   │   └── docs/
    │   │       └── swagger.js
    │   ├── controllers/
    │   │   ├── authController.js
    │   │   └── bookController.js
    │   ├── logs/
    │   │   ├── .8c689653ffdca412638bf778eec75d97d37db3d1-audit.json
    │   │   ├── .b8155ae099578ec4a1bb73341197358b5a2e0953-audit.json
    │   │   ├── app-error-2025-07-23.log
    │   │   ├── app-info-2025-07-23.log
    │   ├── middlewares/
    │   │   ├── auth.js
    │   │   ├── errorHandler.js
    │   │   └── validate.js
    │   ├── models/
    │   │   ├── Book.js
    │   │   └── User.js
    │   ├── routes/
    │   │   ├── authRoutes.js
    │   │   └── bookRoutes.js
    │   ├── services/
    │   │   ├── bookService.js
    │   │   └── userService.js
    │   ├── utils/
    │   │   ├── ApiError.js
    │   │   └── logger.js
    │   └── validators/
    │       ├── auth.js
    │       └── book.js
    └── tests/
        ├── auth.test.js
        ├── book.test.js
        └── jest.setup.js
```

## Setup Instructions

### 1. Clone the repository
   
```bash
git clone https://github.com/Mahe1096/BOOK_NEST.git
cd booknest-api
```

### 2. Install dependencies

<pre><code>npm install</code></pre>

### 3. Create a .env file

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/booknest?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

### 4. Run the app locally

<pre><code></code> npm start</code> </pre>



## Access

- **API Base URL:** [http://localhost:5000](http://localhost:5000)  
- **Swagger UI:** [http://localhost:5000/api-docs](http://localhost:5000/api-docs)


## Docker Setup

- Build and start using Docker Compose:

<pre><code> docker-compose up --build </code>  </pre>

- Docker will use the Dockerfile to build the app.

- Exposes the app on port 5000.

- MongoDB Atlas is used as a managed database (no local container needed).

## API Endpoints


| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| POST   | /api/auth/signup   | Register a new user           |
| POST   | /api/auth/login    | Login and receive token       |
| GET    | /api/books         | Get all books (Auth required) |
| POST   | /api/books         | Add a book (Auth required)    |
| PUT    | /api/books/:id     | Update a book (Auth required) |
| DELETE | /api/books/:id     | Delete a book (Admin only)    |


## API Documentation

The API is fully documented using Swagger.

Once the app is running, visit:

[Swagger UI Documentation](http://localhost:5000/api-docs)


## Security Measures

- **Helmet:** Secures HTTP headers  
- **XSS-Clean:** Prevents cross-site scripting  
- **Mongo-Sanitize:** Prevents NoSQL injection  
- **Rate Limiting:** Controls brute-force attempts  


## Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB Atlas (Cloud)  
- **Auth:** JWT  
- **Validation:** Joi  
- **Docs:** Swagger (OpenAPI 3.0)  
- **Containerization:** Docker, Docker Compose  

## Author

Developed by **Maheswari N — 2025**
