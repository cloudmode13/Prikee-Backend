import express from 'express';
import {
  handleCBPost,
  handleCBGet,
  handleCBDelete,
} from '../../controllers/Cash_Bank/Cash_Bank.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleCBPost);
router.get('/', handleCBGet);
router.delete('/:id', handleCBDelete);

export default router;
