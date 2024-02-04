import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/auth.routes.js";
import groupRoutes from "./routes/groups.routes.js";
import doubtRoutes from "./routes/doubts.routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/cloudinary.router.js";
import projectRouter from "./routes/project.routes.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
  },
});
dotenv.config();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("join", ({ id }) => {
    // Assign the user to a room based on their user ID
    socket.join(id);
    console.log(`User with ID ${id} joined the room`);
  });

  socket.on("send_msg", (data) => {
    console.log(data);
    // Emit the message to the room based on the user ID
    io.to(data.id).emit("msg_rcvd", data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

mongoose.connect(process.env.ATLAS_URI);
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/apisignreq", router);
app.use("/project", projectRouter);
app.use("/", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/doubts", doubtRoutes);

const port = process.env.PORT || 5050;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
