import express from 'express';
import {
  handlePaidStatusPost,
  handlePaidStatusGet,
} from '../../controllers/SalesInvoice/PaidStatus.js';
const router = express.Router();

router.post('/', handlePaidStatusPost);

router.get('/', handlePaidStatusGet);

export default router;
