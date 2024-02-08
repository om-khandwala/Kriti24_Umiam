import express from "express";
import {
  userData,
  updateUser,
  getAllUser,
} from "../modules/user/user.controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.put("/update/:userId", updateUser);
router.get("/userData", userData);

export default router;
