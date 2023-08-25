import express from 'express';
import { handlePost } from '../controllers/demo.js';

const router = express.Router();

router.post("/", handlePost);

export default router;
