# 🗄️ WMS Backend API

The backend server for the Warehouse Management System. Engineered with Node.js and Express to process and serve complex hierarchical JSON data structures from MongoDB.

## ✨ Key Features
- **Tree Mapping Engine**: Scripts that transform relational JSON files into nested tree structures prior to database insertion.
- **Optimized Endpoints**: Designed to decouple the heavy nested-tree payload from the item payloads, drastically reducing network overhead on initial load.
- **Cloud Ready**: Pre-configured `vercel.json` for immediate Serverless deployment.

## 🚀 Quick Start

### 1. Install Dependencies
Make sure you are inside the `backend` directory:
```bash
npm install
```

### 2. Setup Environment Variables
Create a `.env` file in the root of the `backend` directory:
```env
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abc.mongodb.net/WMS
```
*(Replace the `MONGO_URI` with your actual MongoDB Atlas connection string).*

### 3. Seed the Database
If this is your first time running the server, you must inject the raw JSON data into your MongoDB collections:
```bash
node tree.js
node item.js
```
*You only need to do this once.*

### 4. Run the Server
```bash
npm start
```
The API will be live on `http://localhost:4000`.
