import express from 'express';
import {
  handleClientPost,
  handleClientGet,
  handleClientUpdate,
  handleClientDelete,
} from '../../controllers/Clients/clientsModal.js';

const router = express.Router();

router.post('/', handleClientPost);

router.get('/', handleClientGet);

router.put('/:id', handleClientUpdate);

router.delete('/:id', handleClientDelete);

export default router;
