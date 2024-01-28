import express from 'express';
const router = express.Router();
import {createGroup, deleteGroupById, updateGroupById, getGroupById, getAllGroups} from './groups.controller.js';

router.post('/create', createGroup);
router.get('/:groupId', getGroupById);
router.get('/', getAllGroups);
router.put('/:groupId', updateGroupById);
router.delete('/:groupId', deleteGroupById);

export default router;
