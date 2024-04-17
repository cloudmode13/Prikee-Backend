import express from 'express';
import {
  handleClientPost,
  handleClientGet,
  handleClientUpdate,
  handleClientDelete,
} from '../../controllers/Clients/clientsModal.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, handleClientPost);

router.get('/', authenticateToken, handleClientGet);

router.put('/:id', authenticateToken, handleClientUpdate);

router.delete('/:id', authenticateToken, handleClientDelete);

export default router;
