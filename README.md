# 💼 Expense Reimbursement & Workflow Management System

### 🧠 Overview
This project automates a company’s expense reimbursement process and approval workflows.  
It eliminates manual errors and delays by providing a clean interface where **employees can submit expenses**, and **admins can configure multi-level approval workflows** dynamically.

---

## 🚀 Features

### 👩‍💼 Employee Module
- Add employee details (Name, ID, Role, Manager ID)
- Send data to backend via API (`/api/add-employee`)
- Confirmation messages after successful submission

### 🧑‍💻 Manager Workflow Module
- Add Manager details (Name, ID, Role)
- Decide whether manager is part of approval flow (checkbox)
- Select other approvers dynamically (order changes based on selection)
- Option to toggle **“Sequence Matters”**
- View live workflow order below form
- Submit final workflow to backend (`/api/add-manager-workflow`)

### ⚙️ Admin Functionalities
- Manage employees and managers
- Define conditional and multi-level approval rules
- Send and log data to backend in structured JSON format

---


project/
├── backend/
│ └── server.js
└── frontend/
├── admin.html
├── style.css
└── script.js


---

## 🖥️ Tech Stack

| Layer | Technology |
|:------|:------------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Backend | Node.js (Express.js with ES Modules) |
| Middleware | CORS, body-parser |
| Communication | Fetch API (Frontend ↔ Backend) |

---



## 🧩 Folder Structure

