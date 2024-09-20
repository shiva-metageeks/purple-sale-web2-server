import express from "express";
import {
  saveDataArbitrum,
  fetchDataAllArbitrum,
  fetchDataByIdArbitrum,
} from "../../../controller/chain/AirDrop/airDropController.js";

const router = express.Router();

router.post("/airDropInfo/:chain", saveDataArbitrum);
router.get("/airDrop-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/airDrop-fetch-data/:chain/:id", fetchDataByIdArbitrum);

export default router;
