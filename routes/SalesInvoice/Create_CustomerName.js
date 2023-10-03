import express from 'express';
import {
  handleCustomerNamePost,
  handleCustomerNameGet,
  handleCustomerNameDelete,
} from '../../controllers/SalesInvoice/Create_CustomerName.js';
const router = express.Router();

router.post('/', handleCustomerNamePost);

router.get('/', handleCustomerNameGet);

router.delete('/:id', handleCustomerNameDelete);

export default router;
