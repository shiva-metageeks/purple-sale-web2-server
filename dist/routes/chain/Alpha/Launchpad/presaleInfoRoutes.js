import express from "express";
import { saveDataArbitrum, fetchDataAllArbitrum, fetchDataByIdArbitrum, } from "../../../../controller/chain/Alpha/Launchpads/presaleInfoController.js";
const router = express.Router();
router.post("/Alpha/presaleInfo/:chain", saveDataArbitrum);
router.get("/Alpha/presale-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/Alpha/presale-fetch-data/:chain/:id", fetchDataByIdArbitrum);
export default router;
//# sourceMappingURL=presaleInfoRoutes.js.map