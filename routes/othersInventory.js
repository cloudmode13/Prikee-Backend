import express from 'express'
import { handleOthersInvtPost, handleOthersInvtGet } from '../controllers/otherInventory.js';
const router = express.Router()


router.post("/",handleOthersInvtPost);
  
router.get("/", handleOthersInvtGet)

 export default router;