import express from 'express';
import {
  handlePRPost,
  handlePRGet,
  handlePRDelete,
} from '../../controllers/Purchase/Purchase_Return.js';
const router = express.Router();

router.post('/', handlePRPost);

router.get('/', handlePRGet);

router.delete('/:id', handlePRDelete);

export default router;
