import express from 'express';
import {
  handleOthersInvtPost,
  handleOthersInvtGet,
  handleOthersInvtDelete,
} from '../../controllers/Item/otherInventory.js';
const router = express.Router();

router.post('/', handleOthersInvtPost);

router.get('/', handleOthersInvtGet);

router.delete('/:id', handleOthersInvtDelete);

export default router;
