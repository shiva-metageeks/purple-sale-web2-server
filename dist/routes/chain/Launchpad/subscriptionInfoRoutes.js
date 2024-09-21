import express from "express";
import { saveDataArbitrum, fetchDataAllArbitrum, fetchDataByIdArbitrum, } from "../../../controller/chain/Launchpads/subscriptionInfoController.js";
const router = express.Router();
router.post("/SubscriptionInfo/:chain", saveDataArbitrum);
router.get("/Subscription-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/Subscription-fetch-data/:chain/:id", fetchDataByIdArbitrum);
export default router;
//# sourceMappingURL=subscriptionInfoRoutes.js.map