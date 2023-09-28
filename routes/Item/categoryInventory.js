import express from 'express';
import {
  handleCatagoryInvtPost,
  handleCatagoryInvtGet,
  handleCategoryInvtDelete,
} from '../../controllers/Item/categoryInventory.js';
const router = express.Router();

router.post('/', handleCatagoryInvtPost);

router.get('/', handleCatagoryInvtGet);

router.delete('/:id', handleCategoryInvtDelete);

export default router;
