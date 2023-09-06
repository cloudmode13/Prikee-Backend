import express from 'express'
import { handleCatagoryInvtPost, handleCatagoryInvtGet } from '../controllers/categoryInventory.js';
const router = express.Router()


router.post("/",handleCatagoryInvtPost);
  
router.get("/", handleCatagoryInvtGet)

 export default router;