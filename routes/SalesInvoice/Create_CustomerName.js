import express from 'express';
import {
  handleCustomerNamePost,
  handleCustomerNameGet,
  handleCustomerNameDelete,
} from '../../controllers/SalesInvoice/Create_CustomerName.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleCustomerNamePost);

router.get('/', handleCustomerNameGet);

router.delete('/:id', handleCustomerNameDelete);

export default router;
