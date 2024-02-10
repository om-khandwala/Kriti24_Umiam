import express from "express";
const router = express.Router();

import {
  createDoubt,
  allDoubts,
  deleteDoubt,
  getDoubtById,
  createDoubtReply,
  allRepliesOfDoubt,
  getDoubtOfUser,
} from "../modules/doubts/doubts.controller.js";

router.post("/create", createDoubt);
router.post("/:doubt_id/replies", createDoubtReply);
router.get("/:doubt_id/replies", allRepliesOfDoubt);
router.get("/user/:id", getDoubtOfUser);
router.get("/", allDoubts);
router.delete("/:id", deleteDoubt);
router.get("/:id", getDoubtById);

export default router;
