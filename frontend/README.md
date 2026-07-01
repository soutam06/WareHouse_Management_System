# 🖥️ WMS Frontend Interface

The frontend architecture of the Warehouse Management System, built with React and Vite for optimal developer experience and minimal bundle size.

## ✨ Key Features
- **Recursive File Tree**: Dynamically renders infinite levels of nested parent-child warehouse locations.
- **Dynamic Fetching**: Implements lazy loading by only requesting item data when a specific warehouse node is expanded.
- **Responsive Layout**: Designed with modern CSS and Tailwind/MUI patterns for seamless desktop and mobile experiences.

## 🚀 Quick Start

### 1. Install Dependencies
Make sure you are inside the `frontend` directory:
```bash
npm install
```

### 2. Configure Environment (Optional)
If your backend is running on a port other than `4000`, ensure your Axios endpoints in `Godown.jsx` and `Sidebar.jsx` are pointing to the correct API URL (e.g., `http://localhost:4000/`).

### 3. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

> **Note**: For this frontend to display data, ensure the [WMS Backend](../backend/README.md) is running simultaneously.
