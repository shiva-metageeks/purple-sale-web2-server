import { Request, Response, NextFunction } from "express";
import AirDropData from "../../../model/chain/AirDrop/airDropModel.js";
import catchAsyncError from "../../../middleware/catchAsyncError.js";
import ErrorHandler from "../../../utils/errorHandler.js";

export const saveDataArbitrum = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        id,
        airdropTitle,
        logoUrl,
        websiteUrl,
        facebook,
        twitter,
        github,
        instagram,
        discord,
        reddit,
        youtube,
        description,
      } = req.body;

      const newData = new AirDropData({
        id,
        airdropTitle,
        logoUrl,
        websiteUrl,
        facebook,
        twitter,
        github,
        instagram,
        discord,
        reddit,
        youtube,
        description,
      });

      await newData.save();
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      next(new ErrorHandler("Internal server error", 500));
    }
  }
);

export const fetchDataAllArbitrum = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allData = await AirDropData.find();
      res.status(200).json(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
      next(new ErrorHandler("Internal server error", 500));
    }
  }
);

export const fetchDataByIdArbitrum = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idParam = req.params.id;
      const data = await AirDropData.findOne({ id: idParam });
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      next(new ErrorHandler("Internal server error", 500)); // Pass the error to the error handling middleware
    }
  }
);
