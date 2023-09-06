import express from 'express'
import { handleCatagorySrvPost, handleCatagorySrvGet } from '../../controllers/Item/srvCategory.js';
const router = express.Router()


router.post("/",handleCatagorySrvPost);
  
router.get("/", handleCatagorySrvGet)

 export default router;