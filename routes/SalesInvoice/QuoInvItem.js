import express from 'express';
import {
  handleQuoInvItemPost,
  handleQuoInvItemGet,
  handleQuoInvItemUpdate,
  handleQuoInvItemDelete,
} from '../../controllers/SalesInvoice/QuoInvItem.js';

const router = express.Router();

router.post('/', handleQuoInvItemPost);

router.get('/', handleQuoInvItemGet);

router.put('/:id', handleQuoInvItemUpdate);

router.delete('/:id', handleQuoInvItemDelete);

export default router;
