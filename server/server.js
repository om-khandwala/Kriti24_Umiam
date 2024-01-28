import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from './modules/auth/auth.routes.js';
import groupRoutes from './modules/groups/groups.routes.js'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use('/', authRoutes);
app.use('/api/groups', groupRoutes);

const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
