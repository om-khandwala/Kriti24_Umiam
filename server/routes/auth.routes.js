import express from "express";
import { login, redirect, logout } from "../modules/auth/auth.controller.js";
import { Link } from "react-router-dom";
const router = express.Router();

// router.get("/", (req, res) => {
//   <Link to="http://localhost:3001/btn"></Link>;
//   // res.send('Home Page');
// });

router.get("/login", login);
router.get("/redirect", redirect);
router.get("/logout", logout);

export default router;
