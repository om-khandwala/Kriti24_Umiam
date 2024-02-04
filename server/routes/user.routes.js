import express from "express";
import { userData, updateUser } from "../modules/user/user.controller.js";

const router = express.Router();

router.get('/', userData);
router.put('/update/:userId', updateUser);

export default router;