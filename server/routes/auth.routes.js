import express from 'express';
import { login, redirect, logout } from '../modules/auth/auth.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/login', login);
router.get('/redirect', redirect);
router.get('/logout', logout);

export default router;

