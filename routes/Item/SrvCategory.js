import express from 'express';
import {
  handleCatagorySrvPost,
  handleCatagorySrvGet,
  handleCategorySrvDelete,
} from '../../controllers/Item/srvCategory.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleCatagorySrvPost);

router.get('/', handleCatagorySrvGet);

router.delete('/:id', handleCategorySrvDelete);

export default router;
