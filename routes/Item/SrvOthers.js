import express from 'express';
import {
  handleSrvOthersPost,
  handleSrvOthersGet,
  handleSrvOthersDelete,
} from '../../controllers/Item/srvOthers.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

router.post('/', handleSrvOthersPost);

router.get('/', handleSrvOthersGet);

router.delete('/:id', handleSrvOthersDelete);

export default router;
