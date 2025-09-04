# Project

A web application built with **Next.js** and **MySQL** for managing school information. Features a responsive design with form validation, image uploads, and a clean user interface.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Database Setup](#-database-setup)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)


## ✨ Features

- **Add Schools**: Form with comprehensive validation using React Hook Form
- **View Schools**: E-commerce style grid layout displaying school information
- **Image Upload**: Upload and store school images with preview functionality
- **Responsive Design**: Mobile-first design that works on all devices
- **Form Validation**: 
  - Required field validation
  - Email format validation
  - 10-digit phone number validation
  - Image file type validation
- **Database Integration**: MySQL database with secure prepared statements
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Visual feedback during data operations

## 🛠 Tech Stack

- **Frontend**: Next.js (App Router), React 18, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MySQL 8.0+
- **Form Management**: React Hook Form
- **Icons**: Lucide React
- **File Upload**: Native FormData API with server-side processing
- **Styling**: Tailwind CSS with custom utilities

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** 18.17 or later
- **MySQL** 8.0 or later
- **npm** or **yarn** package manager
- Basic knowledge of React and Next.js

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd school-management-system
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Create Required Directories

```bash
mkdir -p public/schoolImages
```

## 🗄️ Database Setup

### 1. Create MySQL Database

```sql
-- Login to MySQL
mysql -u root -p

-- Create database
CREATE DATABASE school_management;
USE school_management;
```

### 2. Create Schools Table

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    contact VARCHAR(15) NOT NULL,
    image TEXT,
    email_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```



## ⚙️ Configuration

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_management

# Optional: Development settings
NODE_ENV=development
```

### 2. Next.js Configuration

The `next.config.js` is already configured for:
- Image optimization
- Environment variables
- File upload support

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Mode

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
school-management-system/
├── public/
│   └── schoolImages/          # Uploaded school images
├── src/
│   ├── app/
│   │   ├── addSchool/
│   │   │   ├── AddSchoolForm.jsx    # Add school form component
│   │   │   ├── Navigation.jsx       # Navigation component
│   │   │   └── page.js             # Add school page
│   │   ├── api/
│   │   │   └── schools/
│   │   │       ├── route.js        # GET /api/schools
│   │   │       └── add/
│   │   │           └── route.js    # POST /api/schools/add
│   │   ├── showSchools/
│   │   │   └── page.js             # Show schools page
│   │   ├── globals.css             # Global styles
│   │   ├── layout.js              # Root layout
│   │   └── page.js                # Home page
│   ├── components/
│   │   ├── addSchool.jsx          # Add school component export
│   │   ├── SchoolCard.jsx         # Individual school card
│   │   ├── showSchools.jsx        # Show schools component
│   │   └── index.js              # Component exports
│   └── lib/
│       └── db.js                 # Database connection utilities
├── .env.local                    # Environment variables
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project documentation
```

## 🔌 API Endpoints

### GET /api/schools
Fetches all schools from the database.

**Response:**
```json
[
  {
    "id": 1,
    "name": "School Name",
    "address": "Full Address",
    "city": "City",
    "state": "State",
    "contact": "1234567890",
    "image": "school-image.jpg",
    "email_id": "school@example.com",
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
]
```

### POST /api/schools/add
Adds a new school to the database.

**Request Body (FormData):**
- `name`: School name (required)
- `address`: Full address (required)
- `city`: City name (required)
- `state`: State name (required)
- `contact`: 10-digit phone number (required)
- `email_id`: Valid email address (required)
- `image`: Image file (optional, max 5MB)

**Response:**
```json
{
  "success": true,
  "id": 123,
  "message": "School added successfully"
}
```
