import express from 'express';
import {
  handleCatagorySrvPost,
  handleCatagorySrvGet,
  handleCategorySrvDelete,
} from '../../controllers/Item/srvCategory.js';
const router = express.Router();

router.post('/', handleCatagorySrvPost);

router.get('/', handleCatagorySrvGet);

router.delete('/:id', handleCategorySrvDelete);

export default router;
