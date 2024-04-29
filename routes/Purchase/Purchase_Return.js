import express from 'express';
import {
  handlePRPost,
  handlePRGet,
  handlePRDelete,
} from '../../controllers/Purchase/Purchase_Return.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handlePRPost);

router.get('/', handlePRGet);

router.delete('/:id', handlePRDelete);

export default router;
