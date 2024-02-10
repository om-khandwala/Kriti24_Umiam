import express from "express";
import {
  userData,
  updateUser,
  getAllUser,
  getUserById,
} from "../modules/user/user.controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.put("/update/:userId", updateUser);
router.get("/userData", userData);
router.get('/find/:userId', getUserById);

export default router;
