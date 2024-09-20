import express from "express";
import {
  saveDataArbitrum,
  fetchDataAllArbitrum,
  fetchDataByIdArbitrum,
} from "../../../../controller/chain/Alpha/Launchpads/subscriptionInfoController.js";
const router = express.Router();

router.post("/Alpha/SubscriptionInfo/:chain", saveDataArbitrum);
router.get("/Alpha/Subscription-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/Alpha/Subscription-fetch-data/:chain/:id", fetchDataByIdArbitrum);

export default router;
