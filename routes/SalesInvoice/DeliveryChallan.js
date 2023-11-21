import express from 'express';
import {
  handleDCPost,
  handleDCGet,
  handleDCUpdate,
  handleDCDelete,
} from '../../controllers/SalesInvoice/Delivery_Challan.js';
const router = express.Router();

router.post('/', handleDCPost);

router.get('/', handleDCGet);

router.put('/:id', handleDCUpdate);

router.delete('/:id', handleDCDelete);

export default router;
