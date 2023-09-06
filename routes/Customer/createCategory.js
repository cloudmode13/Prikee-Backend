import express from 'express'
import { handleCatagoryPost, handleCatagoryGet } from '../../controllers/Customer/createCategory.js';
const router = express.Router()


router.post("/",handleCatagoryPost);
  
router.get("/", handleCatagoryGet)

 export default router;