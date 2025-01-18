# Mock API ![Version Badge](https://img.shields.io/badge/Version-1.0-green)

A simple Node.js application to generate mock test cases and suggestions based on code and language input.

## Features

- Simple API endpoint to generate test cases.
- Supports multiple programming languages like Python, JavaScript, etc.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ShubhamShete2002/Mock_api.git
    ```

2. Navigate into the project directory:
    ```bash
    cd Mock_api
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the App

1. Start the server:
    ```bash
    npm start
    ```

2. The API will be available at `http://localhost:3000`.

## API Endpoint

- **POST** `/api/test-code`
  - Request body:
    ```json
    {
      "code": "your code here",
      "language": "language of the code"
    }
    ```

  - Response:
    ```json
    {
      "testCases": ["Test 1: ...", "Test 2: ..."],
      "suggestions": "Add error handling for invalid input."
    }
    ```

## Demo

![Screenshot](screenshot.png)

## Technologies Used

- Node.js
- Express

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
