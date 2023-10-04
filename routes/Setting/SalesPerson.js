import express from 'express';
import {
  handleSalesPersonPost,
  handleSalesPersonGet,
  handleSalesPersonEdit,
  handleSalesPersonDelete,
} from '../../controllers/Setting/SalesPerson.js';
const router = express.Router();

router.post('/', handleSalesPersonPost);

router.get('/', handleSalesPersonGet);

router.put('/:id', handleSalesPersonEdit);

router.delete('/:id', handleSalesPersonDelete);

export default router;
