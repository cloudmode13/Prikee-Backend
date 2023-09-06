import express from 'express';
import { handleServicePost, handleServiceGet, handleServiceUpdate, handleServiceDelete } from '../../controllers/Item/serviceInv.js';

const router = express.Router();

router.post("/", handleServicePost);

router.get("/", handleServiceGet)

router.put("/:id", handleServiceUpdate)

router.delete("/:id", handleServiceDelete)

export default router;
