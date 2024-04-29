import express from 'express';
import {
  handleQuoNumPost,
  handleQuoNumGet,
} from '../../controllers/SalesInvoice/Quotation_Number.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleQuoNumPost);

router.get('/', handleQuoNumGet);

export default router;
