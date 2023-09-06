import express from 'express';
import { handleCustomerPost, handleCustomerGet, handleCustomerUpdate, handleCustomerDelete } from '../../controllers/Customer/customerModal.js';

const router = express.Router();

router.post("/", handleCustomerPost);

router.get("/", handleCustomerGet)

router.put("/:id", handleCustomerUpdate)

router.delete("/:id", handleCustomerDelete)

export default router;
