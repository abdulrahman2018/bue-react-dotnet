
```markdown
 User Registration Application

This is a simple User Registration application built using React for the front end and ASP.NET Core for the back end. The application allows users to register with their details and view a list of registered users.

Features

- User Registration Form
- List of Registered Users
- Responsive Design using Bootstrap

Tech Stack

- Frontend: React, Bootstrap
- Backend: ASP.NET Core, Entity Framework Core, SQLite
- Database: SQLite

Getting Started

Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (version 6.0 or higher)
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [SQLite](https://www.sqlite.org/index.html) (for local database)

Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/abdulrahman2018/LoginRegistrationApp.git
   cd LoginRegistrationApp
   ```

2. Backend Setup:

   - Navigate to the backend project directory (e.g., `UserRegistrationApi`) and run the following commands:

   ```bash
   cd UserRegistrationApi
   dotnet restore
   dotnet run
   ```

   The backend API will start running on `http://localhost:5059`.

3. Frontend Setup:

   - Navigate to the frontend project directory (e.g., `user-management`) and run the following commands:

   ```bash
   cd user-management
   npm install
   npm start
   ```

   The frontend will start running on `http://localhost:3000`.

API Endpoints

- GET /api/users: Retrieve the list of registered users.
- POST /api/users: Register a new user with the following JSON body:

```json
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "age": 30
}
```

Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Fill in the registration form to add a new user.
3. Click on "User List" in the navigation to view all registered users.

Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
![image](https://github.com/user-attachments/assets/76d0b4ee-d6f8-46fb-81d4-76282806be13)
