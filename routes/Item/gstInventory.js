import express from 'express';
import {
  handleGSTInvtPost,
  handleGSTInvtGet,
  handleGSTInvtDelete,
} from '../../controllers/Item/gstInventory.js';
const router = express.Router();

router.post('/', handleGSTInvtPost);

router.get('/', handleGSTInvtGet);

router.delete('/:id', handleGSTInvtDelete);

export default router;
