import express from 'express';
import {
  handleExpensesPost,
  handleExpensesGet,
  handleExpensesDelete,
} from '../../controllers/Expenses/Expenses.js';

const router = express.Router();

router.post('/', handleExpensesPost);
router.get('/', handleExpensesGet);
router.delete('/:id', handleExpensesDelete);

export default router;
