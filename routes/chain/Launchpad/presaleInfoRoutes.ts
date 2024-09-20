import express from "express";
import {
  saveDataArbitrum,
  fetchDataAllArbitrum,
  fetchDataByIdArbitrum,
} from "../../../controller/chain/Launchpads/presaleInfoController.js";

const router = express.Router();

router.post("/presaleInfo/:chain", saveDataArbitrum);
router.get("/presale-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/presale-fetch-data/:chain/:id", fetchDataByIdArbitrum);

export default router;
