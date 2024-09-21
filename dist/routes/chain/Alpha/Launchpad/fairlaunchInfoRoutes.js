import express from "express";
import { saveDataArbitrum, fetchDataAllArbitrum, fetchDataByIdArbitrum, } from "../../../../controller/chain/Alpha/Launchpads/fairLaunchInfoController.js";
const router = express.Router();
router.post("/Alpha/fairLaunchInfo/:chain", saveDataArbitrum);
router.get("/Alpha/fairLaunch-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/Alpha/fairLaunch-fetch-data/:chain/:id", fetchDataByIdArbitrum);
export default router;
//# sourceMappingURL=fairlaunchInfoRoutes.js.map