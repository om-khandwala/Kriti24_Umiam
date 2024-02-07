import express from "express";
import {
  userData,
  updateUser,
  getAlluser,
} from "../modules/user/user.controller.js";

const router = express.Router();

router.get("/", getAlluser);
router.put("/update/:userId", updateUser);

export default router;
