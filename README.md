#  DevSecOps Dashboard

A full-stack DevSecOps Dashboard for real-time threat monitoring, device status visualization, and secure user authentication.

---


---

##  Features

-  **User Authentication** (JWT-based Register/Login)
-  **Real-time Threat Activity Chart** (Recharts)
-  **Threat Logs** stored in **MongoDB**
-  **Device Status Overview** (IoT / V2V Devices)
-  **Protected Dashboard Route**
-  **Tailwind CSS** UI with responsive layout
-  **Node.js + Express** backend

---

##  Project Structure

```bash
devsecops-dashboard/
│
├── client/                   # Frontend (React + Tailwind CSS)
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── ...
│
├── server/                   # Backend (Node.js + Express + MongoDB)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
│
├── .env                      # Environment variables
├── README.md
└── package.json
