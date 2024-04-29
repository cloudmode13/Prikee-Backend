import express from 'express';
import {
  handlePaidStatusPost,
  handlePaidStatusGet,
} from '../../controllers/SalesInvoice/PaidStatus.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handlePaidStatusPost);

router.get('/', handlePaidStatusGet);

export default router;
