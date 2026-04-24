# 📸 Image Pro — React + Firebase Image Gallery

An image gallery application built with **React (Vite)**, **Firebase**, **Firestore**, and **Tailwind CSS**.  
This project is part of a hands-on learning journey focused on understanding how Firebase works in real-world frontend applications.

---

## 🚀 Project Overview

Image Pro allows users to:

- Upload images
- View a dynamic gallery
- Store and retrieve data using Firebase services
- Explore modern frontend workflows with React and Vite

> This project is currently under development — Firebase integration and advanced features are in progress.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Backend (BaaS):** Firebase
    - Firestore (database)
    - Firebase Storage (planned)
    - Authentication (optional/future)

---

## 📂 Project Structure (Initial)

```bash
image-pro/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── firebase/        # (to be added)
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Fork the Repository

1. Navigate to the repository:  
   👉 https://github.com/keithowino/image-pro
2. Click the **Fork** button (top-right corner)
3. This creates a copy under your GitHub account

---

### 2. Clone the Repository

After forking:

```bash
git clone https://github.com/YOUR-USERNAME/image-pro.git
```

Replace YOUR-USERNAME with your GitHub username.

Then move into the project directory:

```bash
cd image-pro
```

### 3. Install Dependencies

Make sure you have Node.js (v18+) installed.

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

You should see output like:

```bash
Local: http://localhost:5173/
```

Open that URL in your browser.

---

## 🔥 Firebase Setup (Upcoming Step)

Firebase integration is a core part of this project. Below is the expected setup process once implemented.

1. Create a Firebase Project
   Go to https://console.firebase.google.com/
   Click "Add Project"
   Follow the setup steps
2. Register Your App
   Choose Web App
   Copy the Firebase config object
3. Install Firebase SDK

    ```bash
    npm install firebase
    ```

4. Create Firebase Config File

    Create a file:

    ```bash
    /src/firebase/firebase.js
    ```

    Example structure:

    ```javascript
    import { initializeApp } from "firebase/app";

    const firebaseConfig = {
    	apiKey: "YOUR_API_KEY",
    	authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    	projectId: "YOUR_PROJECT_ID",
    	storageBucket: "YOUR_PROJECT_ID.appspot.com",
    	messagingSenderId: "XXXX",
    	appId: "XXXX",
    };

    export const app = initializeApp(firebaseConfig);
    ```

5. Environment Variables (Recommended)

    Create a .env file:

    ```.env
    VITE_FIREBASE_API_KEY=your_key
    VITE_FIREBASE_AUTH_DOMAIN=your_domain
    ...
    ```

    Then use:

    ```javascript
    import.meta.env.VITE_FIREBASE_API_KEY;
    ```

---

## 🌐 Live Demo

🚧 Not deployed yet — coming soon

Once deployed, this section will include:

Live URL
Demo credentials (if needed)

---

## 📈 Learning Goals

This project is intentionally structured to help you:

Understand Firebase from scratch
Work with Firestore (CRUD operations)
Manage async state in React
Build scalable frontend architecture

---

## 🤝 Contributing

Contributions are welcome.

Steps:

1.  Fork the repo
2.  Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3.  Make your changes
4.  Commit:

    ```bash
    git commit -m "Add: your feature description"
    ```

5.  Push

    ```bash
    git push origin feature/your-feature-name
    ```

6.  Open a pull request

---

## 🧠 Author

### Keith Owino

- 📧 designsolutions1629@gmail.com

- 🌐 https://pickaxe-and-shovel.vercel.app

- 💻 https://github.com/keithowino

---

## 📜 License

This project is licensed under the MIT License.

## ⚠️ Notes

This project is part of a learning process — expect iterative changes
Firebase rules and security will be refined as development progresses
Performance considerations are kept in mind for low-spec environments

## ⭐ Support

If you find this helpful:

Star the repo
Share feedback
Follow the journey
