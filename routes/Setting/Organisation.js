import express from "express";
import {
  handleOrganisationPost,
  handleOrganisationGet,
  handleOrganisationEdit,
  handleOrganisationDelete,
} from "../../controllers/Setting/Organisation.js";
const router = express.Router();

router.post("/", handleOrganisationPost);

router.get("/", handleOrganisationGet);

router.put("/:id", handleOrganisationEdit);

router.delete("/:id", handleOrganisationDelete);

export default router;
