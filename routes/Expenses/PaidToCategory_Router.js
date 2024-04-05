import express from 'express';
import {
  handlePTCatagoryPost,
  handlePTCatagoryGet,
  handlePTCategoryDelete,
} from '../../controllers/Expenses/PaidToCategory.js';
const router = express.Router();

router.post('/', handlePTCatagoryPost);

router.get('/', handlePTCatagoryGet);

router.delete('/:id', handlePTCategoryDelete);

export default router;
