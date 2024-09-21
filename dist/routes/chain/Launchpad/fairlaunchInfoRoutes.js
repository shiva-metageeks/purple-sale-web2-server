import express from "express";
import { saveDataArbitrum, fetchDataAllArbitrum, fetchDataByIdArbitrum, } from "../../../controller/chain/Launchpads/fairLaunchInfoController.js";
const router = express.Router();
router.post("/fairLaunchInfo/:chain", saveDataArbitrum);
router.get("/fairLaunch-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/fairLaunch-fetch-data/:chain/:id", fetchDataByIdArbitrum);
export default router;
//# sourceMappingURL=fairlaunchInfoRoutes.js.map