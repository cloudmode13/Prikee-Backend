import express from 'express';
import multer from 'multer';
import path from 'path';

import {
  handleProductImagePost,
  handleProductImageGet,
  handleProductImageUpdate,
  handleProductImageDelete,
} from '../../controllers/Item/ProductImage.js';

const app = express();

const router = express.Router();

app.use(express.static('product'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'product/Images');
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + '-' + file.originalname);

    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});
const upload = multer({ storage: storage });

router.post('/', upload.single('productImage'), handleProductImagePost);

router.get('/', handleProductImageGet);

router.put('/:id', upload.single('productImage'), handleProductImageUpdate);

router.delete('/:id', handleProductImageDelete);

export default router;
