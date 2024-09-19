import express from "express";
import {
  saveDataArbitrum,
  fetchDataAllArbitrum,
  fetchDataByIdArbitrum,
} from "../../../../controller/chain/Alpha/Launchpads/fairLaunchInfoController.js";

const router = express.Router();

router.post("/Alpha/fairLaunchInfo/Arbitrum", saveDataArbitrum);
router.get("/Alpha/fairLaunch-fetch-data/Arbitrum", fetchDataAllArbitrum);
router.get("/Alpha/fairLaunch-fetch-data/Arbitrum/:id", fetchDataByIdArbitrum);

export default router;
