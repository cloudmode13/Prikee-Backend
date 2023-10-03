import express from 'express';
import {
  handleSalesPersonPost,
  handleSalesPersonGet,
  handleSalesPersonDelete,
} from '../../controllers/Setting/SalesPerson.js';
const router = express.Router();

router.post('/', handleSalesPersonPost);

router.get('/', handleSalesPersonGet);

router.delete('/:id', handleSalesPersonDelete);

export default router;
