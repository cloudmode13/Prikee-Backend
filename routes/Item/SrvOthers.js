import express from 'express'
import { handleSrvOthersPost, handleSrvOthersGet } from '../../controllers/Item/srvOthers.js';
const router = express.Router()


router.post("/",handleSrvOthersPost);
  
router.get("/", handleSrvOthersGet)

 export default router;