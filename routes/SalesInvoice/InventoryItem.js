import express from 'express';
import {
  handleInventoryItemPost,
  handleInventoryItemGet,
  handleInventoryItemUpdate,
  handleInventoryItemDelete,
} from '../../controllers/SalesInvoice/InventoryItem.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleInventoryItemPost);

router.get('/', handleInventoryItemGet);

router.put('/:id', handleInventoryItemUpdate);

router.delete('/:id', handleInventoryItemDelete);

export default router;
