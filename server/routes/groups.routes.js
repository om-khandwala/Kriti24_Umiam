import express from 'express';
const router = express.Router();
import {createGroup, deleteGroupById, updateGroupById, getGroupById, getAllGroups, createChat, getGroupChat, joinMember} from '../modules/groups/groups.controller.js';

router.post('/create', createGroup);
router.post('/group-chat', createChat);
router.get('/group-chat/:id', getGroupChat);
router.post('/group-join', joinMember);
router.get('/:groupId', getGroupById);
router.get('/', getAllGroups);
router.put('/:groupId', updateGroupById);
router.delete('/:groupId', deleteGroupById);

export default router;
