# Personal Portfolio Website

A modern full-stack personal portfolio website built with React, Tailwind CSS, and Vite for the frontend, plus Express and MongoDB for backend contact-form handling.

## 🚀 Overview

This repository contains a portfolio project designed to showcase personal information, achievements, photography, and an interactive contact page. It includes:

- A responsive React frontend with client-side routing
- A contact form using React Hook Form and validation
- A Node.js/Express backend that saves contact submissions to MongoDB
- Tailwind CSS styling and smooth page transitions

## 📁 Repository Structure

- `client/` - React frontend application
- `server/` - Express API server with MongoDB integration
- `README.md` - Project overview and setup instructions
- `vercel.json` - Deployment configuration

## 🧱 Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router, React Hook Form, Framer Motion
- Backend: Node.js, Express, MongoDB, Mongoose, CORS, dotenv
- Deployment: Vercel-compatible frontend and API-ready server

## ✨ Features

- Home, gallery, about, achievements, and contact pages
- Responsive layout for desktop and mobile
- Contact form with inline validation and submission feedback
- API endpoint for storing messages in MongoDB
- Simple server setup with environment variables

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd portfolio
```

### 2. Install dependencies

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server/` directory with the following values:

```env
MONGOOSE_URI=<your-mongodb-connection-string>
PORT=5000
```

### 4. Run the development servers

Start the backend server:

```bash
cd server
npm run start
```

Start the frontend development server:

```bash
cd ../client
npm run dev
```

Open the frontend URL shown by Vite in your browser.

## 🧪 Available Scripts

### Client

- `npm run dev` - Start the React development server
- `npm run build` - Build the production frontend bundle
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

### Server

- `npm run start` - Start the Express server with nodemon

## 📌 API Endpoint

The server exposes a contact API endpoint:

- `POST /api/contact`

This route accepts JSON payloads with `name`, `email`, and `message` fields.

## 💡 Deployment Notes

- The frontend is built with Vite and can be deployed to Vercel or any static host.
- The backend requires a Node.js runtime and MongoDB available via `MONGOOSE_URI`.
- In production, update the contact form endpoint URL if the API is hosted separately.

## 🙋‍♂️ Author

Your Name

---

Feel free to customize this README with your personal details, project screenshots, and social links.
