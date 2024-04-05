import express from 'express';
import {
  handleCdnPost,
  handleCdnGet,
  handleCdnDelete,
} from '../../controllers/SalesInvoice/CreditNote_Controller.js';
const router = express.Router();

router.post('/', handleCdnPost);

router.get('/', handleCdnGet);

router.delete('/:id', handleCdnDelete);

export default router;
