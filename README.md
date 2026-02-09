🌍 **Wanderlust – Airbnb Clone**

***Wanderlust is a full-stack web application inspired by Airbnb. It allows users to explore, create, and manage property listings with secure authentication, image uploads, and user reviews. The project is built to simulate real-world full-stack development using modern web technologies.***

🔗 Live Demo: https://wanderlust-airbnb-ipze.onrender.com


✨ **Features**
 
 * User Authentication & Authorization

 * Secure signup and login system

 * Role-based access control

 * Property Listings

 * Create, edit, and delete listings

 * Upload multiple images for listings

 * Reviews & Ratings

 * Add and delete reviews

 * User-specific review permissions

 * Maps & Location

 * Location-based listings with map integration

 * Responsive Design

 * Mobile-friendly and desktop-friendly UI

 * Security & Validation

 * Input validation and error handling

 * Secure session management


🛠 **Tech Stack**
 * Frontend

   - HTML5

   - CSS3

   - JavaScript
     
   - EJS (Embedded JavaScript Templates)

   - Bootstrap

* Backend

   - Node.js

   - Express.js
   - RESTful APIs

* Database

   - MongoDB

   - Mongoose

 * Authentication & Security

   - Passport.js
   - Session-based authentication

 * Maps & Media

   - Leaflet (Map integration)

   - Cloudinary (Image upload and management)

 * Architecture

   - MVC (Model–View–Controller)

 * Version Control

   - Git

   - GitHub

 * Deployment

   - Render


📂 **Project Structure**

wanderlust/

│

├── Init/                   #Database initialization and seed files

├── Models/                 #Mongoose models

├── controllers/            #Controller logic for routes

├── public/                 #Static assets (CSS, JS, images)

├── routes/                 #Express route definitions

├── utils/                  #Utility and helper functions

├── views/                  #EJS templates

│   ├── includes/           #Reusable UI components

│   ├── layouts/            #Layout templates

│   ├── listings/           #Listing-related views

│   ├── users/              #User authentication views

│   └── error.ejs           #Error handling view

│

├── .gitignore             #Git ignored files

├── app.js                 #Main application entry point
 
├── cloudConfig.js         #Cloudinary configuration

├── middleware.js          #Custom middleware functions

├── schema.js              #Joi schemas for validation

├── package.json           #Project metadata and dependencies

├── package-lock.json      #Dependency lock file





🔍 **Folder Overview**

  * Init – Handles database initialization and sample data setup

  * Models – Contains Mongoose schemas for users, listings, and reviews

  * Controllers – Business logic for handling requests and responses

  * Routes – Defines application routes and connects them to controllers

  * Views – EJS templates structured for modular and reusable UI

  * Utils – Helper functions used across the application

  * Public – Static files for styling and client-side scripts

  * Middleware – Custom middleware for authentication, authorization, and validation



⚙️ **Installation & Setup**

  ***Clone the repository***

     - git clone https://github.com/your-username/wanderlust.git


   ***Navigate to the project directory***

    - cd wanderlust


  ***Install dependencies***

    - npm install


  ***Create a .env file and add the following variables***

    - MONGO_URI=your_mongodb_connection_string
    - CLOUDINARY_CLOUD_NAME=your_cloud_name
    - CLOUDINARY_KEY=your_cloudinary_key
    - CLOUDINARY_SECRET=your_cloudinary_secret
    - SESSION_SECRET=your_session_secret


  ***Start the application***

    - node app.js


  ***Open in browser***

    - http://localhost:3000



🎯 **Learning Outcomes**

  - Gained hands-on experience in full-stack web development

  - Implemented authentication, authorization, and sessions

  - Worked with cloud services for image storage

  - Followed MVC architecture for clean code structure

  - Learned deployment and production-level debugging



🚧 **Future Enhancements**

  - Advanced search and filter options

  - Booking and payment integration

  - User profile management

  - Performance optimization and caching

  - Admin dashboard

👩‍💻 **Author**

**Shweta Kumari |**
**Full-Stack Web Developer**
