import express from 'express';
import {
  handleSRPost,
  handleSRGet,
  handleSRDelete,
} from '../../controllers/SalesInvoice/SalesReturn.js';
const router = express.Router();

router.post('/', handleSRPost);

router.get('/', handleSRGet);

router.delete('/:id', handleSRDelete);

export default router;
