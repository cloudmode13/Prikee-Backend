import express from 'express';
import {
  handleCBPost,
  handleCBGet,
  handleCBDelete,
} from '../../controllers/Cash_Bank/Cash_Bank.js';

const router = express.Router();

router.post('/', handleCBPost);
router.get('/', handleCBGet);
router.delete('/:id', handleCBDelete);

export default router;
