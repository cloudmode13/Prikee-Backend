import express from 'express';
import {
  handleSalesInvoicePost,
  handleSalesInvoiceGet,
  handleSalesInvoiceUpdate,
  handleSalesInvoiceDelete,
} from '../../controllers/SalesInvoice/SalesInvoice.js';
const router = express.Router();

router.post('/', handleSalesInvoicePost);

router.get('/', handleSalesInvoiceGet);

router.put('/:id', handleSalesInvoiceUpdate);

router.delete('/:id', handleSalesInvoiceDelete);

export default router;
