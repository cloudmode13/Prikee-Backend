import express from 'express';
import {
  handleCatagoryPost,
  handleCatagoryGet,
  handleCategoryDelete,
} from '../../controllers/Clients/createCategory.js';
const router = express.Router();

router.post('/', handleCatagoryPost);

router.get('/', handleCatagoryGet);

router.delete('/:id', handleCategoryDelete);

export default router;
