import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from './routes/auth.routes.js';
import groupRoutes from './routes/groups.routes.js';
import doubtRoutes from './routes/doubts.routes.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/cloudinary.router.js";
import projectRouter from "./routes/project.routes.js";
const app = express();
dotenv.config();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});
app.use('/api/apisignreq', router)
app.use('/project',projectRouter)
app.use('/', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/doubts', doubtRoutes);

const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
