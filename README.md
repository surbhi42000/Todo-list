# CRUD App with MongoDB and Express

This repository contains a simple CRUD (Create, Read, Update, Delete) web application built using Node.js, Express, and MongoDB. The application allows users to manage a list of tasks (todos) by adding, marking as done, and deleting them.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/surbhi42000/Todo-list.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Todo-list
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Ensure that MongoDB is running on your machine.

2. Update the `mongoURI` variable in `index.js` with the appropriate MongoDB connection string:

    ```javascript
    const mongoURI = 'mongodb://localhost:27017/todo';
    ```

## Usage

1. Start the application:

    ```bash
    node index.js
    ```

2. Open your browser and visit [http://localhost:3030](http://localhost:3030) to access the CRUD application.

## Functionality

- **View tasks**: Navigate to the home page to see a list of existing tasks.
- **Add a task**: Use the provided form to add a new task to the list.
- **Mark task as done**: Click the "Done" button next to a task to mark it as completed.
- **Delete a task**: Click the "Delete" button to remove a task from the list.

## Dependencies

- [Express](https://expressjs.com/): Web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/): NoSQL database for storing tasks.
- [EJS](https://ejs.co/): Embedded JavaScript templating for rendering views.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
