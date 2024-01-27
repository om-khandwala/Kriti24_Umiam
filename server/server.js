import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from './modules/auth/auth.routes.js';
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use('/', authRoutes);

const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
