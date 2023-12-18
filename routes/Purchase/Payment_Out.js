import express from 'express';
import {
  handlePaymentOutPost,
  handlePaymentOutGet,
  handlePaymentOutUpdate,
  handlePaymentOutDelete,
} from '../../controllers/Purchase/Payment_Out.js';
const router = express.Router();

router.post('/', handlePaymentOutPost);

router.get('/', handlePaymentOutGet);

router.put('/:id', handlePaymentOutUpdate);

router.delete('/:id', handlePaymentOutDelete);

export default router;
