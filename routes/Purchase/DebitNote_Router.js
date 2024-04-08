import express from 'express';
import {
  handleDbnPost,
  handleDbnGet,
  handleDbnDelete,
} from '../../controllers/Purchase/DebitNote_Controller.js';
const router = express.Router();

router.post('/', handleDbnPost);

router.get('/', handleDbnGet);

router.delete('/:id', handleDbnDelete);

export default router;
