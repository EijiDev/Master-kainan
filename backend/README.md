# Master-Kainan Backend

Express.js backend server for the Master-Kainan restaurant reservation system.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/master-kainan
JWT_SECRET=your_secure_jwt_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
```

### 3. MongoDB Setup

#### Option A: Local MongoDB

```bash
# Make sure MongoDB is running on your system
# Default: mongodb://localhost:27017
```

#### Option B: MongoDB Atlas (Cloud)

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/master-kainan
```

### 4. Run the Server

**Development Mode (with auto-reload):**

```bash
npm run dev
```

**Production Mode:**

```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Register a new user

  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "SecurePass123"
  }
  ```

- **POST** `/api/auth/login` - Login user

  ```json
  {
    "email": "john@example.com",
    "password": "SecurePass123"
  }
  ```

- **GET** `/api/auth/profile` - Get user profile (requires JWT token)
  - Header: `Authorization: Bearer <token>`

### Reservations

- **POST** `/api/reservations` - Create reservation

  ```json
  {
    "date": "2024-02-15",
    "time": "19:00",
    "partySize": 4,
    "specialRequests": "Window seat preferred"
  }
  ```

- **GET** `/api/reservations` - Get user's reservations

  - Header: `Authorization: Bearer <token>`

- **PUT** `/api/reservations/:id` - Update reservation

  - Header: `Authorization: Bearer <token>`

- **DELETE** `/api/reservations/:id` - Cancel reservation
  - Header: `Authorization: Bearer <token>`

### Health Check

- **GET** `/api/health` - Server status

## Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   │   └── db.js       # MongoDB connection
│   ├── controllers/     # Request handlers
│   │   ├── authController.js
│   │   └── reservationController.js
│   ├── middleware/      # Custom middleware
│   │   └── auth.js     # JWT authentication
│   ├── models/         # MongoDB schemas
│   │   ├── User.js
│   │   └── Reservation.js
│   ├── routes/         # API routes
│   │   ├── auth.js
│   │   └── reservations.js
│   └── index.js       # Server entry point
├── .env.example        # Example environment variables
├── .gitignore         # Git ignore file
├── package.json       # Dependencies
└── README.md         # This file
```

## Dependencies

- **express** - Web framework
- **cors** - Enable cross-origin requests
- **dotenv** - Environment variable management
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **mongoose** - MongoDB object modeling

## Development Dependencies

- **nodemon** - Auto-restart server on file changes

## Security Notes

1. Change `JWT_SECRET` in production
2. Use HTTPS in production
3. Validate and sanitize all inputs
4. Never commit `.env` file
5. Use strong passwords for MongoDB

## Troubleshooting

**MongoDB Connection Error:**

```
Make sure MongoDB is running or check MONGODB_URI in .env
```

**CORS Error:**

```
Verify CORS_ORIGIN in .env matches your frontend URL (http://localhost:5173)
```

**Port Already in Use:**

```
Change PORT in .env or kill the process using the port
```

## Next Steps

1. Connect frontend API calls to these endpoints
2. Add input validation middleware
3. Implement email verification
4. Add password reset functionality
5. Deploy to cloud (Heroku, Railway, Render, etc.)
