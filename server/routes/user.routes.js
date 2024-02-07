import express from "express";
import {
  userData,
  updateUser,
  getAllUser,
} from "../modules/user/user.controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.put("/update/:userId", updateUser);

export default router;
