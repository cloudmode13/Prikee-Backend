import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  handleServicePost,
  handleServiceGet,
  handleServiceUpdate,
  handleServiceDelete,
} from '../../controllers/Item/serviceInv.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'service/ServiceImages');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('serviceImage'), handleServicePost);

router.get('/', handleServiceGet);

router.put('/:id', upload.single('serviceImage'), handleServiceUpdate);

router.delete('/:id', handleServiceDelete);

export default router;
