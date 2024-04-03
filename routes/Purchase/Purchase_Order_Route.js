import express from 'express';
import {
  handlePOPost,
  handlePOGet,
  handlePOUpdate,
  handlePODelete,
} from '../../controllers/Purchase/Pur_Order.Controller.js';
const router = express.Router();

router.post('/', handlePOPost);

router.get('/', handlePOGet);

router.put('/:id', handlePOUpdate);

router.delete('/:id', handlePODelete);

export default router;
