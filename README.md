# 📦 Warehouse Management System (WMS)

An enterprise-grade application designed to visualize and manage complex warehouse storage hierarchies. The system provides an interactive tree view of nested godowns and dynamically fetches real-time item inventories for each location.

Built on a robust **MERN stack** (MongoDB, Express, React, Node.js) and bundled with Vite for lightning-fast frontend performance.

---

## 📑 Table of Contents
- [🎥 Video Demonstration](#-video-demonstration)
- [🚀 Architecture & Approach](#-architecture--approach)
- [🛠️ Getting Started](#%EF%B8%8F-getting-started)
- [💻 Tech Stack](#-tech-stack)

---

## 🎥 Video Demonstration

Watch a video demonstration of the application in action:

[![Watch the demo](https://img.youtube.com/vi/1jAuaMIRVXyUF_mXkTngPYopMUBOV3vkg/maxresdefault.jpg)](https://drive.google.com/file/d/1jAuaMIRVXyUF_mXkTngPYopMUBOV3vkg/view?usp=sharing)

---

## 🚀 Architecture & Approach

The core engineering challenge involved mapping deeply nested parent-child warehouse relationships and rendering them efficiently on the client.

### ⚙️ Backend Architecture
- **Hierarchical Data Transformation**: Converts flat, referential warehouse arrays into deeply nested JSON tree structures recursively before persisting to the database.
- **RESTful Endpoints**: 
  - `GET /godown` — Serves the pre-computed tree structure directly from MongoDB for immediate sidebar rendering.
  - `GET /item` — Fetches specific inventory sets via `godownId` foreign keys to minimize payload size.
- **Database Seeding**: Custom Node scripts (`tree.js`, `item.js`) map and seed raw JSON data into MongoDB collections seamlessly.

### 🎨 Frontend Architecture
- **Recursive UI Components**: The Sidebar recursively traverses the godown tree, nesting folders infinitely based on backend data.
- **Lazy Loading Strategy**: Items are only fetched (via Axios) when a user explicitly expands a leaf node, optimizing network bandwidth.

---

## 🛠️ Getting Started

For detailed instructions on running each service, please refer to their respective documentation:

- 🖥️ [Frontend Setup Guide](./frontend/README.md)
- 🗄️ [Backend Setup Guide](./backend/README.md)

---

## 💻 Tech Stack

### Frontend Ecosystem
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Backend Ecosystem
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

### Infrastructure
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
