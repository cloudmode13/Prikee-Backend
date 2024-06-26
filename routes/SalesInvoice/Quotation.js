import express from 'express';
import {
  handleQuotationPost,
  handleQuotationGet,
  handleQuotationUpdate,
  handleQuotationDelete,
} from '../../controllers/SalesInvoice/Quotation.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleQuotationPost);

router.get('/', handleQuotationGet);

router.put('/:id', handleQuotationUpdate);

router.delete('/:id', handleQuotationDelete);

export default router;
