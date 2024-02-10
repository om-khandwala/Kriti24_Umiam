import express from 'express';
import {checkspam} from '../modules/middleware/spambot.js';
const router = express.Router();

router.post('/', checkspam);


export default router;