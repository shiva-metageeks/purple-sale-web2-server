import PinkLock from '../../../../model/Multichain/Arbitrum/PinkLock/pinklockModel.js';
import catchAsyncError from '../../../../middleware/catchAsyncError.js';
import ErrorHandler from '../../../../utils/errorHandler.js';
export const savePinkLockDataArbitrum = catchAsyncError(async (req, res, next) => {
    try {
        const { title, id } = req.body;
        const newData = new PinkLock({
            title,
            id
        });
        await newData.save();
        res.status(201).json({ message: "Data saved successfully" });
    }
    catch (error) {
        console.error("Error saving data:", error);
        next(new ErrorHandler("Internal server error", 500)); // Pass the error to the error handling middleware
    }
});
export const fetchPinkLockDataAllArbitrum = catchAsyncError(async (req, res, next) => {
    try {
        const allData = await PinkLock.find();
        res.status(200).json(allData);
    }
    catch (error) {
        console.error("Error fetching data:", error);
        next(new ErrorHandler("Internal server error", 500)); // Pass the error to the error handling middleware
    }
});
//# sourceMappingURL=pinkLockController.js.map