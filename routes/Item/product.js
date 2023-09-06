import express from 'express';
import { handleProductPost,handleProductGet, handleProductUpdate, handleProductDelete  } from '../../controllers/Item/product.js';

const router = express.Router();

router.post("/", handleProductPost);

router.get("/", handleProductGet)

router.put("/:id", handleProductUpdate)

router.delete("/:id", handleProductDelete)

export default router;
