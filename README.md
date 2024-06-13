# Backend Developer Assessment Project

## Introduction
In this challenge, your task is to implement a simple REST API to manage a collection of stock trades using CRUD operations
- Use JSON file as the database.
- `id`: The unique trade ID. (Integer)
- `type`: The trade type, either 'buy' or 'sell'. (String)
- `user_id`: The unique user ID. (Integer)
- `symbol`: The stock symbol. (String)
- `shares`: The total number of shares traded. The traded shares value is between 10 and 30 shares. (Integer)
- `price`: The price of one share of stock at the time of the trade. (Integer)

## Project Type
Backend

## Deployed App
Backend: [Live Demo](https://turbocomply.vercel.app/)


## Features and Test by using this Links
**CRUD  operation:** 
  **Create:**
    Create Trade: [Live Demo](https://turbocomply.vercel.app/trades)
    method :post
    use live demo link and insert the data by above key values in postman or thunderclient

 **Get:**
    Get Trade: [Live Demo](https://turbocomply.vercel.app/trades)
    method: get
    use live demo link and get the data in postman or thunderclient

 **Get By Id:**
    Get By Trade: [Live Demo](https://turbocomply.vercel.app/trades/:id)
    method: get
    use live demo link and get the data by id in postman or thunderclient

**Update:**
    Update Trade: [Live Demo](https://turbocomply.vercel.app/trades/:id)
    method: update
    use live demo link and update the data by using id in postman or thunderclient

 **Delete:**
    Delete Trade: [Live Demo](https://turbocomply.vercel.app/trades/:id)
    method: delete
    use live demo link and delete the data by using id in postman or thunderclient

## Installation & Getting Started
To run the project locally, follow these steps:

### Clone the repository

    git clone https://github.com/Sravani0410/Turbocomply.git
    
### Install dependencies
 
    npm install 


### Start the application

    npm start

## Libraries used:
  
  1. express : Express.js is a popular and widely used web application framework for Node.js.
  2. nodemon : we can watch the server.
  3. morgan : which can be very useful for debugging and monitoring the application's behavior.

---