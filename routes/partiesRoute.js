import express from 'express';
import { handlePartiesPost, handlePartiesGet, handlePartiesUpdate, handlePartiesDelete } from '../controllers/parties.js';

const router = express.Router();

router.post("/", handlePartiesPost);

router.get("/", handlePartiesGet)

router.put("/:id", handlePartiesUpdate)

router.delete("/:id", handlePartiesDelete)

export default router;
