import express from 'express';
import { login, redirect, logout } from './auth.controller.js';
import  projectRouter from '../project/project.controller.js'

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/login', login);
router.get('/redirect', redirect);
router.get('/logout', logout);
router.use('/project', projectRouter);

export default router;

