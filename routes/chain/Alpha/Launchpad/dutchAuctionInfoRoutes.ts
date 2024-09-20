import express from "express";
import {
  saveDataArbitrum,
  fetchDataAllArbitrum,
  fetchDataByIdArbitrum,
} from "../../../../controller/chain/Alpha/Launchpads/dutchAuctionController.js";

const router = express.Router();

router.post("/Alpha/dutchAuctionInfo/:chain", saveDataArbitrum);
router.get("/Alpha/dutchAuction-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/Alpha/dutchAuction-fetch-data/:chain/:id", fetchDataByIdArbitrum);

export default router;
