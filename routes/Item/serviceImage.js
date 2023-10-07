import express from 'express';
import multer from 'multer';
import path from 'path';

import {
  handleServiceImagePost,
  handleServiceImageGet,
  handleServiceImageUpdate,
  handleServiceImageDelete,
} from '../../controllers/Item/serviceImage.js';

const app = express();

const router = express.Router();

// app.use(express.static('product'));

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

router.post('/', upload.single('serviceImage'), handleServiceImagePost);

router.get('/', handleServiceImageGet);

router.put('/:id', upload.single('serviceImage'), handleServiceImageUpdate);

router.delete('/:id', handleServiceImageDelete);

export default router;
