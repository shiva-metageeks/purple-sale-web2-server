import express from "express";
import { fetchPinkLockDataAllArbitrum, savePinkLockDataArbitrum, } from "../../../controller/chain/PinkLock/pinkLockController.js";
const router = express.Router();
router.post("/save-data-pinklock", savePinkLockDataArbitrum);
router.get("/fetch-data-pinklock", fetchPinkLockDataAllArbitrum);
export default router;
//# sourceMappingURL=pinkLockRoutes.js.map