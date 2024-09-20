import express from "express";
import {
  addToCartArbitrum,
  getCartItemsArbitrum,
  getCartItemsByWalletArbitrum,
  deleteCartItemArbitrum,
} from "../../../controller/chain/Cards/cardController.js";

const router = express.Router();

router.post("/cart/:chain", addToCartArbitrum);

// Fetch all items in the cart
router.get("/getCart/:chain", getCartItemsArbitrum);

router.get("/getCart/:chain/:walletAddress", getCartItemsByWalletArbitrum);

router.delete("/deleteCart/:chain/:itemId", deleteCartItemArbitrum);

export default router;
