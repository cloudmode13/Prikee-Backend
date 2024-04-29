import express from 'express';
import {
  handleExpensesPost,
  handleExpensesGet,
  handleExpensesDelete,
} from '../../controllers/Expenses/Expenses.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleExpensesPost);
router.get('/', handleExpensesGet);
router.delete('/:id', handleExpensesDelete);

export default router;
