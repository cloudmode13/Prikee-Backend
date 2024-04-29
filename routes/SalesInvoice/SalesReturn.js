import express from 'express';
import {
  handleSRPost,
  handleSRGet,
  handleSRDelete,
} from '../../controllers/SalesInvoice/SalesReturn.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleSRPost);

router.get('/', handleSRGet);

router.delete('/:id', handleSRDelete);

export default router;
