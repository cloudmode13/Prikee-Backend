import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  handleOrganisationPost,
  handleOrganisationGet,
  handleOrganisationEdit,
  handleOrganisationDelete,
} from '../../controllers/Setting/Organisation.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();
router.use(authenticateToken);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Organisation/Logo');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('orgLogo'), handleOrganisationPost);

router.get('/', handleOrganisationGet);

router.put('/:id', upload.single('orgLogo'), handleOrganisationEdit);

router.delete('/:id', handleOrganisationDelete);

export default router;
