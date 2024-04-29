import express from 'express';
import {
  handleCatagoryInvtPost,
  handleCatagoryInvtGet,
  handleCategoryInvtDelete,
} from '../../controllers/Item/categoryInventory.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleCatagoryInvtPost);

router.get('/', handleCatagoryInvtGet);

router.delete('/:id', handleCategoryInvtDelete);

export default router;
