import express from "express";
import { saveDataArbitrum, fetchDataAllArbitrum, fetchDataByIdArbitrum, } from "../../../controller/chain/PrivateSale/privateSaleController.js";
const router = express.Router();
router.post("/privateSaleInfo/:chain", saveDataArbitrum);
router.get("/privateSale-fetch-data/:chain", fetchDataAllArbitrum);
router.get("/privateSale-fetch-data/:chain/:id", fetchDataByIdArbitrum);
export default router;
//# sourceMappingURL=privateSaleRoutes.js.map