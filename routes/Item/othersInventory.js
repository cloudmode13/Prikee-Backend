import express from 'express';
import {
  handleOthersInvtPost,
  handleOthersInvtGet,
  handleOthersInvtDelete,
} from '../../controllers/Item/otherInventory.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleOthersInvtPost);

router.get('/', handleOthersInvtGet);

router.delete('/:id', handleOthersInvtDelete);

export default router;
