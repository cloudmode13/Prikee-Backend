import express from 'express';
import multer from 'multer';
import {
  handleProductImagePost,
  handleProductImageGet,
  handleProductImageUpdate,
  handleProductImageDelete,
} from '../../controllers/Item/ProductImage.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'product/Images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post('/', upload.single('productImage'), handleProductImagePost);

router.get('/', handleProductImageGet);

router.put('/:id', upload.single('productImage'), handleProductImageUpdate);

router.delete('/:id', handleProductImageDelete);

export default router;
