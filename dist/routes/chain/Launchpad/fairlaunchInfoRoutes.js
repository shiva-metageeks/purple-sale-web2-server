import express from "express";
import { saveDataArbitrum, fetchDataAllArbitrum, fetchDataByIdArbitrum, } from "../../../controller/chain/Launchpads/fairLaunchInfoController.js";
const router = express.Router();
router.post("/fairLaunchInfo/Arbitrum", saveDataArbitrum);
router.get("/fairLaunch-fetch-data/Arbitrum", fetchDataAllArbitrum);
router.get("/fairLaunch-fetch-data/Arbitrum/:id", fetchDataByIdArbitrum);
export default router;
//# sourceMappingURL=fairlaunchInfoRoutes.js.map