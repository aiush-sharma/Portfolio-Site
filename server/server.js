import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/Contact.routes.js";
import ConnectDB from "./db.js";
import dns from "node:dns";
// Force Node.js to use Google's Public DNS instead of your strict local network DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
ConnectDB();

// Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running smoothly on port ${PORT}`));
