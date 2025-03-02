# Krazy Kanban Board

## Description

Krazy Kanban Board is a full-stack application that allows agile teams to manage tasks efficiently using a Kanban board. It features secure authentication with JSON Web Tokens (JWT) and enables users to create, edit, and track tasks in different stages of progress. The app is deployed on Render and follows best practices in web development.

## Features

- User authentication with JWT (Login & Logout functionality)
- Task management with CRUD operations
- Kanban board layout with swimlanes for "Todo," "In Progress," and "Done"
- Secure API with authentication middleware
- Responsive and polished UI
- Deployment on Render

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the application locally, follow these steps:
1. Clone the repository:

`git clone git@github.com:LDegraz/kanban-board.git`

2. Navigate to the project directory:

`cd kanban-board/develop`

3. Install dependencies:

`npm run install`

4. Set up the database:

- Create a `.env` file in the `server` directory with the following:
`DB_NAME=kanban_db`
`DB_USER=your_postgres_user`
`DB_PASSWORD=your_postgres_password`
`JWT_SECRET=your_secret_key`

- Run the database schema setup:
`psql -U your_postgres_user -f server/db/schema.sql`

- Seed the database:
`npm run seed`
`5. Start the development server:`
`npm run start:dev`

- The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:3001`.

## Usage

1. Open the application in your browser.
2. Register or log in using valid credentials.
3. Create and manage tasks within the Kanban board.
4. Drag and drop tasks across different lanes.
5. Log out when finished.

## Screenshots
![Kanban Board Screenshot](?????)

## Technologies Used

- **Frontend:** React, TypeScript, Vite, React Router
- **Backend:** Node.js, Express, Sequelize, PostgreSQL
- **Authentication:** JWT, bcrypt
- **Deployment:** Render

## API Endpoints

#### Authentication
- `POST /auth/login` - Authenticate user and return JWT token

#### Users
- `GET /api/users` - Retrieve all users
- `GET /api/users/:id` - Retrieve a specific user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user information
- `DELETE /api/users/:id` - Delete a user

#### Tickets
- `GET /api/tickets` - Retrieve all tickets
- `GET /api/tickets/:id` - Retrieve a specific ticket
- `POST /api/tickets` - Create a new ticket
- `PUT /api/tickets/:id` - Update a ticket
- `DELETE /api/tickets/:id` - Delete a ticket

## Contributors

- [Lauren DeGrazia](https://github.com/LDegraz) - Project Creator
- Xpert Learning Assistant - The AI Learning Assistant for support and guidance throughout the bootcamp.
- Lesley Vaden - T.A., providing guidance and support throughout the assignment. 
- Kevin Ferguson: Instructor, providing guidance and support throughout the assignment.
- Lindelwe - Tutor from Rutgers Bootcamp, providing additional help and support for the assignment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployed Application

[Live Demo](https://kanban-board-3pas.onrender.com)

## GitHub Repository

[GitHub Repository](https://github.com/LDegraz/kanban-board.git)

