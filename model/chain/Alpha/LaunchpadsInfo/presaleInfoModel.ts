import { Schema, Model, model } from "mongoose";
import { IPresaleData } from "../../../../types/Alpha/Launchpads/presaleData.js";

const presaleDataSchemaArbitrum: Schema = new Schema<IPresaleData>({
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

const PresaleDataArbitrum = model(
  "PresaleDataAlphaArbitrum",
  presaleDataSchemaArbitrum
);

export default PresaleDataArbitrum;
