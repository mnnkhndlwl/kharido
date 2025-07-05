<div id="top"></div>

<h1 align="center"> GroGo </h1>
<h3 align="center"> ⭐A Grocery Delivery app built with React Native⭐ </h3>

<!-- ---------------------------------------------------------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------------------------------------------------------- -->

  <br />
    <strong> <a href="https://github.com/mnnkhndlwl/shopping_microservice">Backend Code Repo </strong></a> 
    <br />

<!-- ---------------------------------------------------------------------------------------------------------------------- -->
<!-- ABOUT THE PROJECT -->

## Overview of Project

<p align="center">  A grocery delivery app built with react native , nodejs and mongodb. 
</p>

<!--  .............................................................................................................................................  -->

### Tech Stacks used

```
# React Native for Android app development
# Redux toolkit for state management
# Nodejs for Backend
# Mongodb as Database
# Mapbox for map feature
# Stripe for payment gateway
# Firebase cloud storage for storing images
# Docker for Containerization
# Nginx Reverse Proxy
# RabbitMQ as a message broker
# JWT authentication
# Hashed password saving in the MongoDB database
# RESTful API using ExpressJS
```

<!-- -------------------------------------------------------------------------------------------------------------------------------------------------- -->

### Key Features

```
# Login using email and password
# Searching products by voice
# Adding and removing products from wishlist
# Adding Different Address to a user by selecting on the map
# Payment feature by stripe
# Filtering Products based on different categories
# Sorting Products based on Price in ascending and descending order
# Separate screen for seeing user's all orders
# Free Delivery on orders above 99
# Persisting User Cart
# Persisting Current User
# Checkout Feature
# JWT Authentication
# JWT cookie authentication
```

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

```bash
# For Backend
- Node.js (v18 or higher)
- Docker & Docker Compose
- MongoDB (if running without Docker)

# For Frontend (React Native)
- Node.js (v18 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development - macOS only)
- Java Development Kit (JDK 11 or higher)
- Android SDK
```

### Backend Setup

#### Option 1: Using Docker (Recommended)

1. **Navigate to backend directory**

   ```bash
   cd backend_app
   ```

2. **Create environment files**

   ```bash
   # Create .env files for each service
   touch customer/.env
   touch products/.env
   touch shopping/.env
   ```

3. **Configure environment variables**

   ```bash
   # Add the following to each .env file:
   # customer/.env
   DB_URL=mongodb://localhost:27017/customer_db
   APP_SECRET=your_secret_key
   PORT=8001

   # products/.env
   DB_URL=mongodb://localhost:27017/products_db
   APP_SECRET=your_secret_key
   PORT=8002

   # shopping/.env
   DB_URL=mongodb://localhost:27017/shopping_db
   APP_SECRET=your_secret_key
   PORT=8003
   ```

4. **Start services with Docker Compose**

   ```bash
   docker-compose up --build
   ```

5. **Access the services**
   - Customer Service: `http://localhost:8001`
   - Products Service: `http://localhost:8002`
   - Shopping Service: `http://localhost:8003`
   - Nginx Proxy: `http://localhost:80`

#### Option 2: Manual Setup

1. **Start each service individually**

   ```bash
   # Terminal 1 - Customer Service
   cd backend_app/customer
   npm install
   npm start

   # Terminal 2 - Products Service
   cd backend_app/products
   npm install
   npm start

   # Terminal 3 - Shopping Service
   cd backend_app/shopping
   npm install
   npm start

   # Terminal 4 - Gateway Service
   cd backend_app/gateway
   npm install
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd Frontend_app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure backend URL**

   ```bash
   # Update src/config.js with your backend URL
   # For local development: http://localhost:8080 or your gateway URL
   ```

4. **Start Metro bundler**

   ```bash
   npm start
   ```

5. **Run on Android**

   ```bash
   # Make sure Android emulator is running or device is connected
   npm run android
   ```

6. **Run on iOS (macOS only)**
   ```bash
   # Make sure iOS simulator is running
   npm run ios
   ```

### Development Tips

- **Backend**: Services will automatically restart when you make changes (using nodemon)
- **Frontend**: Metro bundler supports hot reloading
- **Database**: Make sure MongoDB is running if not using Docker
- **API Testing**: Use tools like Postman to test backend endpoints

### Common Issues & Solutions

1. **Metro bundler issues**: Clear cache with `npx react-native start --reset-cache`
2. **Android build issues**: Clean build with `cd android && ./gradlew clean`
3. **iOS build issues**: Clean build folder in Xcode
4. **Docker issues**: Make sure Docker is running and ports are not occupied

### Project Structure

```
├── backend_app/          # Backend microservices
│   ├── customer/         # Customer service (Port 8001)
│   ├── products/         # Products service (Port 8002)
│   ├── shopping/         # Shopping service (Port 8003)
│   ├── gateway/          # API Gateway
│   └── proxy/            # Nginx reverse proxy
└── Frontend_app/         # React Native mobile app
```

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

https://github.com/mnnkhndlwl/kharido/assets/75252077/3af07156-3c4b-4d9e-b093-87bd7400fe31

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/f9c4199a-a85c-4e5b-8bb4-a25b4d35d8ff)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/246f2a7e-e4b3-4bf4-a6ee-5a86277687b1)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/1513662e-2abf-4460-b761-4eaf54babae8)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/91573d47-0835-4cc1-954e-b04a800258ea)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/b3e402f6-91b3-43ae-be04-ede0d49c1643)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/5d4465d1-72c5-44f1-b579-cfbee53f99c8)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/2390fdf1-e31d-4aa6-952e-40d610871588)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/877eb12d-031c-4b24-9c0c-4b719d1a6eea)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/c26241bc-e1f7-4f08-994f-0f26b9b2b7c7)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/81c5518d-881c-4a4f-bb3e-8fa70e41ee22)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/8cbb798e-8a21-4702-8538-ae4be8b0cdb0)

# ![image](https://github.com/mnnkhndlwl/kharido/assets/75252077/b4430df0-041f-4568-ad37-f2dead330a79)

  <p align="right">(<a href="#top">back to top</a>)</p>
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->
  
## Feedback

If you have any feedback or suggestions please reach out to maintainers.

- [Manan khandelwal](https://github.com/mnnkhndlwl)

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<br>
	 
<div align="center">
<h3>Show some ❤️ by starring this awesome repository!</h3>
</div>

### [![Typing SVG](https://readme-typing-svg.herokuapp.com/?lines=Thanks+for+contributing!;&size=30;align=center)](https://git.io/typing-svg)

<div id="Bottom"></div>
