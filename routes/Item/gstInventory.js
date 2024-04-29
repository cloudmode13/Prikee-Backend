import express from 'express';
import {
  handleGSTInvtPost,
  handleGSTInvtGet,
  handleGSTInvtDelete,
} from '../../controllers/Item/gstInventory.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleGSTInvtPost);

router.get('/', handleGSTInvtGet);

router.delete('/:id', handleGSTInvtDelete);

export default router;
