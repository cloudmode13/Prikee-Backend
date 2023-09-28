import express from 'express';
import {
  handleSrvOthersPost,
  handleSrvOthersGet,
  handleSrvOthersDelete,
} from '../../controllers/Item/srvOthers.js';
const router = express.Router();

router.post('/', handleSrvOthersPost);

router.get('/', handleSrvOthersGet);

router.delete('/:id', handleSrvOthersDelete);

export default router;
