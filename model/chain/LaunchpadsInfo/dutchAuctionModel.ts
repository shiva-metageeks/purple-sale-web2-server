import { Schema, Model, model } from "mongoose";
import { IDutchAuctionData } from "../../../types/Launchpads/presaleData.js";

const fairLaunchDataSchemaArbitrum: Schema = new Schema<IDutchAuctionData>({
  id: Number,
  logoUrl: String,
  bgLogoUrl: String,
  websiteUrl: String,
  facebook: String,
  twitter: String,
  github: String,
  instagram: String,
  discord: String,
  reddit: String,
  youtube: String,
  description: String,
  chain: String,
});

const FairLaunchDataSchemaArbitrum: Model<IDutchAuctionData> =
  model<IDutchAuctionData>(
    "dutchAuctionDataArbitrum",
    fairLaunchDataSchemaArbitrum
  );

export default FairLaunchDataSchemaArbitrum;
