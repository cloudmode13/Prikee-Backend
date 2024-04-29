import express from 'express';
import {
  handleQuoInvItemPost,
  handleQuoInvItemGet,
  handleQuoInvItemUpdate,
  handleQuoInvItemDelete,
} from '../../controllers/SalesInvoice/QuoInvItem.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleQuoInvItemPost);

router.get('/', handleQuoInvItemGet);

router.put('/:id', handleQuoInvItemUpdate);

router.delete('/:id', handleQuoInvItemDelete);

export default router;
