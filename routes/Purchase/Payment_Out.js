import express from 'express';
import {
  handlePaymentOutPost,
  handlePaymentOutGet,
  handlePaymentOutUpdate,
  handlePaymentOutDelete,
} from '../../controllers/Purchase/Payment_Out.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handlePaymentOutPost);

router.get('/', handlePaymentOutGet);

router.put('/:id', handlePaymentOutUpdate);

router.delete('/:id', handlePaymentOutDelete);

export default router;
