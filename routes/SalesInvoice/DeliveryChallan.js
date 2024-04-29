import express from 'express';
import {
  handleDCPost,
  handleDCGet,
  handleDCUpdate,
  handleDCDelete,
} from '../../controllers/SalesInvoice/Delivery_Challan.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleDCPost);

router.get('/', handleDCGet);

router.put('/:id', handleDCUpdate);

router.delete('/:id', handleDCDelete);

export default router;
