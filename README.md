# To-Do List App Readme

This repository contains a simple To-Do List web application built using Node.js, Express.js, and MongoDB.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start MongoDB:

    Make sure your MongoDB server is running. You can start it using the following command:

    ```bash
    mongod
    ```

4. Start the application:

    ```bash
    npm start
    ```

    The application will be accessible at [http://localhost:3030](http://localhost:3030).

## Usage

- Access the application in your web browser at [http://localhost:3030](http://localhost:3030).
- You can add tasks, mark them as done, and delete them.

## File Structure

- `index.js`: Main entry point for the application.
- `public/`: Contains static files (CSS, images, etc.).
- `views/`: Contains EJS templates for rendering HTML pages.

## Dependencies

- [express](https://www.npmjs.com/package/express): Web application framework for Node.js.
- [mongodb](https://www.npmjs.com/package/mongodb): MongoDB driver for Node.js.
- [ejs](https://www.npmjs.com/package/ejs): Embedded JavaScript templating.

## Database

The application uses MongoDB to store tasks. The connection details are specified in `mongoURI` in `index.js`. Make sure your MongoDB server is running and accessible.

## Routes

- `GET /`: Displays the list of tasks.
- `POST /add`: Adds a new task.
- `POST /toggle`: Toggles the status of a task (done/undone).
- `POST /delete`: Deletes a task.

## Contributing

Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
