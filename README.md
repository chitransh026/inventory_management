# inventory_management
# Inventory Management System

A modern inventory management system built with React frontend and Express.js backend.

## Features

-  **Items Management**: Add and view inventory items with details
-  **Categories**: Organize items by categories
-  **Suppliers**: Manage supplier information
-  **Modern UI**: Beautiful, responsive design with gradient themes

## Tech Stack

- **Frontend**: React 18
- **Backend**: Express.js 5
- **Database**: MongoDB with Mongoose

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on `localhost:27017`

4. Start the backend server:
```bash
node script.js
```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3001` (or another port if 3001 is taken)

## Usage

1. Start the backend server first
2. Start the frontend development server
3. Open your browser and navigate to the frontend URL (usually `http://localhost:3001`)
4. Use the tabs to navigate between Items, Categories, and Suppliers
5. Click the "+ Add" buttons to create new entries

## API Endpoints

- `GET /categories` - Get all categories
- `POST /categories` - Create a new category
- `GET /items` - Get all items
- `POST /items` - Create a new item
- `GET /suppliers` - Get all suppliers
- `POST /suppliers` - Create a new supplier

