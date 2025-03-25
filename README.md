# Task Management Web Application

This is a full-stack Task Management web application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create, update, delete, and manage tasks efficiently.

## 🚀 Features
- User-friendly task creation and management.
- REST API for task CRUD operations.
- API authentication with JWT (if implemented).
- Responsive UI built with React and Tailwind CSS.
- API testing support using Postman.

---

## 📌 Installation & Setup

### **1. Clone the repository**
```sh
git clone https://github.com/your-repo/task-management.git
cd task-management
```

### **2. Install dependencies**
#### **Backend Setup**
```sh
cd backend
npm install
```
- Configure environment variables:  
  Create a `.env` file inside `backend/` and add:
  ```env
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  ```
- Start the backend server:
  ```sh
  npm start
  ```

#### **Frontend Setup**
```sh
cd ../frontend
npm install
```
- Start the frontend:
  ```sh
  npm run dev
  ```

---

## 💼 API Documentation

### **Base URL**
```
http://localhost:5000/api/tasks
```

### **Endpoints**

#### **1. Get All Tasks**
- **URL:** `/api/tasks`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "123456",
      "title": "Complete project",
      "description": "Finish the frontend UI",
      "status": "Pending"
    }
  ]
  ```

#### **2. Create a Task**
- **URL:** `/api/tasks`
- **Method:** `POST`
- **Request:**
  ```json
  {
    "title": "New Task",
    "description": "Task details"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Task created successfully",
    "task": {
      "_id": "789012",
      "title": "New Task",
      "description": "Task details",
      "status": "Pending"
    }
  }
  ```

#### **3. Update a Task**
- **URL:** `/api/tasks/:id`
- **Method:** `PUT`
- **Request:**
  ```json
  {
    "title": "Updated Task",
    "status": "Completed"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Task updated successfully"
  }
  ```

#### **4. Delete a Task**
- **URL:** `/api/tasks/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

## 🛠 Testing API with Postman
1. Open **Postman**.
2. Import the API endpoints manually or use the **Postman Collection** (link if available).
3. Test each endpoint by sending appropriate requests (`GET`, `POST`, `PUT`, `DELETE`).
4. Verify responses and debug if necessary.

---

## 📸 Screenshots
### **1. Task List UI**
![Task List](screenshots/task_list.png)

### **2. Task Form UI**
![Task Form](screenshots/task_form.png)

---

## 🐝 License
This project is licensed under the MIT License.

---

## 💡 Author
**Your Name**  
GitHub: [@your-username](https://github.com/your-username)  
LinkedIn: [Your Profile](https://linkedin.com/in/your-profile)

