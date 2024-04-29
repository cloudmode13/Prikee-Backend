import express from 'express';
import {
  handlePTCatagoryPost,
  handlePTCatagoryGet,
  handlePTCategoryDelete,
} from '../../controllers/Expenses/PaidToCategory.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handlePTCatagoryPost);

router.get('/', handlePTCatagoryGet);

router.delete('/:id', handlePTCategoryDelete);

export default router;
