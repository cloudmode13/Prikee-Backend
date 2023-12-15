import express from 'express';
import {
  handlePurchasePost,
  handlePurchaseGet,
  handlePurchaseUpdate,
  handlePurchaseDelete,
} from '../../controllers/Purchase/PurchaseModal.js';
const router = express.Router();

router.post('/', handlePurchasePost);

router.get('/', handlePurchaseGet);

router.put('/:id', handlePurchaseUpdate);

router.delete('/:id', handlePurchaseDelete);

export default router;
