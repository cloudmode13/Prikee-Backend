import express from 'express';
import {
  handleSRPost,
  handleSRGet,
} from '../../controllers/SalesInvoice/SalesReturn.js';
const router = express.Router();

router.post('/', handleSRPost);

router.get('/', handleSRGet);

export default router;
