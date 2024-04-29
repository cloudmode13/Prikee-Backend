import express from 'express';
import multer from 'multer';
import path from 'path';

import {
  handleProductPost,
  handleProductGet,
  handleProductUpdate,
  handleProductDelete,
} from '../../controllers/Item/product.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'product/Images');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

const router = express.Router();
router.use(authenticateToken);

router.post('/', upload.single('productImage'), handleProductPost);

router.get('/', handleProductGet);

router.put('/:id', upload.single('productImage'), handleProductUpdate);

router.delete('/:id', handleProductDelete);

export default router;
