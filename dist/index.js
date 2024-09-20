import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/dbConnection.js";
//Arbitrum
import cartRoutesArbitrum from "./routes/chain/Cards/cardRoutes.js";
import presaleInfoRoutesArbitrum from "./routes/chain/Launchpad/presaleInfoRoutes.js";
import pinkLockRoutesArbitrum from "./routes/chain/PinkLock/pinkLockRoutes.js";
import fairLaunchRoutesArbitrum from "./routes/chain/Launchpad/fairlaunchInfoRoutes.js";
import pinkLockWeb3RoutesArbitrum from "./routes/chain/PinkLock/pinkLockWeb3Routes.js";
import dutchAuctionArbitrum from "./routes/chain/Launchpad/dutchAuctionInfoRoutes.js";
import privateSaleArbitrum from "./routes/chain/PrivateSale/privateSaleRoutes.js";
import SubscriptionArbitrum from "./routes/chain/Launchpad/subscriptionInfoRoutes.js";
import AirdropArbitrum from "./routes/chain/Airdrop/airdropRoutes.js";
import presaleInfoRoutesAlphaArbitrum from "./routes/chain/Alpha/Launchpad/presaleInfoRoutes.js";
import dutchAuctionAlphaArbitrum from "./routes/chain/Alpha/Launchpad/dutchAuctionInfoRoutes.js";
import SubscriptionAlphaArbitrum from "./routes/chain/Alpha/Launchpad/subscriptionInfoRoutes.js";
import fairLaunchRoutesAlphaArbitrum from "./routes/chain/Alpha/Launchpad/fairlaunchInfoRoutes.js";
/* CONFIG */
dotenv.config();
const server = express();
server.use(express.json());
server.use(helmet());
server.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
server.use(morgan("common"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
//Arbitrum
server.use("/", AirdropArbitrum);
server.use("/", cartRoutesArbitrum);
server.use("/", presaleInfoRoutesArbitrum);
server.use("/", fairLaunchRoutesArbitrum);
server.use("/", pinkLockRoutesArbitrum);
server.use("/", dutchAuctionArbitrum);
server.use("/", SubscriptionArbitrum);
server.use("/", privateSaleArbitrum);
server.use("/", pinkLockWeb3RoutesArbitrum);
server.use("/", presaleInfoRoutesAlphaArbitrum);
server.use("/", dutchAuctionAlphaArbitrum);
server.use("/", SubscriptionAlphaArbitrum);
server.use("/", fairLaunchRoutesAlphaArbitrum);
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;
server.get("/", (req, res) => {
    res.send("Yes, you are connected to the server! ✅");
});
(async () => {
    await connectDB()
        .then(() => {
        server.listen(PORT, () => {
            console.log(`Server live on: ` + `http://localhost:${PORT}`);
        });
    })
        .catch((err) => {
        console.log("Error: ", err);
        throw new Error(err.message);
    });
})();
//# sourceMappingURL=index.js.map