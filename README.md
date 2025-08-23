
# 📘 Programming Tool

This project is a **programming learning system** with a **React frontend** and a **Django backend**.  
The backend provides RESTful API endpoints to support authentication, course learning, quizzes, coding practice, discussions, and progress tracking.  



## 👤 Accounts API (User Authentication)

| Method | Endpoint                  | Description             |
|--------|---------------------------|-------------------------|
| POST   | `/api/accounts/register/` | Register a new user     | 
| POST   | `/api/accounts/login/`    | User login and get JWT  | 



## 💻 Code Runner API

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| POST   | `/api/run/`      | Execute user-submitted code |
| POST   | `/api/validate/` | Validate exercise answers   |


## 💬 Discussion API

| Method | Endpoint                          | Description                          |
|--------|-----------------------------------|--------------------------------------|
| GET    | `/api/discuss/all/`               | Retrieve all discussions with replies |
| POST   | `/api/discuss/<int:discuss_id>/reply/` | Add a reply to a discussion           |
| POST   | `/api/discuss/create/`            | Create a new discussion               |

## 📝 Feedback API

| Method | Endpoint               | Description                 |
|--------|------------------------|-----------------------------|
| POST   | `/api/feedback/`       | Submit new feedback         |
| GET    | `/api/feedback/all/`   | Retrieve all feedback entries |


## 📊 Progress API

| Method | Endpoint                        | Description                          |
|--------|---------------------------------|--------------------------------------|
| POST   | `/api/learning-path/user_progress/`         | Mark a topic as completed             |
| GET    | `/api/learning-path/user_progress/summary/` | Retrieve overall course progress      |
| GET    | `/api/learning-path/user_progress/list/`    | Retrieve user topic list              |
| POST   | `/api/learning-path/user_progress/unmark/`  | Unmark a completed topic              |

## 🧩 Quiz API

| Method | Endpoint                                | Description                           |
|--------|-----------------------------------------|---------------------------------------|
| GET    | `/api/quiz/`                            | Retrieve all quiz questions           |
| GET    | `/api/quiz/<int:pk>/`                   | Retrieve quiz details by ID           |
| GET    | `/api/quiz/wrong_answers/`              | Retrieve the list of wrong answers    |
| GET    | `/api/quiz/get_wrong_answers/`          | Retrieve all user wrong answers       |
| DELETE | `/api/quiz/wrong_answers/<int:quiz_id>/`| Delete a wrong answer by quiz ID      |


## 📦 Tech Stack

* **Frontend**: React + Material UI
* **Backend**: Django REST Framework
* **Authentication**: JWT
* **Deployment**: Docker Compose

