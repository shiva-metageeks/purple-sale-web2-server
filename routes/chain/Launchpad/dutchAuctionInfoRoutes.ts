import express from "express";
import {
  saveDataArbitrum,
  fetchDataAllArbitrum,
  fetchDataByIdArbitrum,
} from "../../../controller/chain/Launchpads/dutchAuctionController.js";

const router = express.Router();

router.post("/dutchAuctionInfo/:chain", saveDataArbitrum);
router.get("/dutchAuction-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/dutchAuction-fetch-data/:chain/:id", fetchDataByIdArbitrum);

export default router;
