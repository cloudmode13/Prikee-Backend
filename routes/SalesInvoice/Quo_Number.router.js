import express from 'express';
import {
  handleQuoNumPost,
  handleQuoNumGet,
} from '../../controllers/SalesInvoice/Quotation_Number.js';
const router = express.Router();

router.post('/', handleQuoNumPost);

router.get('/', handleQuoNumGet);

export default router;
