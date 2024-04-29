import express from 'express';
import {
  handleCatagoryPost,
  handleCatagoryGet,
  handleCategoryDelete,
} from '../../controllers/Clients/createCategory.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';
const router = express.Router();

router.use(authenticateToken);

router.post('/', handleCatagoryPost);

router.get('/', handleCatagoryGet);

router.delete('/:id', handleCategoryDelete);

export default router;
