import express from 'express';
const router = express.Router();

import { createDoubt, allDoubts, deleteDoubt, getDoubtById, createDoubtReply, allRepliesOfDoubt } from './doubts.controller.js';

router.post('/create', createDoubt);
router.post('/:doubt_id/replies', createDoubtReply);
router.get('/:doubt_id/replies', allRepliesOfDoubt);
router.get('/', allDoubts); 
router.delete('/:id', deleteDoubt);
router.get('/:id', getDoubtById); 

export default router;
