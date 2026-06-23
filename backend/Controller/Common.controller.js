import mongoose from "mongoose";

export const getById = (Model, modelName = "Data") => {
  return async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: "Invalid Id",
          success: false,
        });
      }

      const data = await Model.findById(id);

      if (!data) {
        return res.status(404).json({
          message: `${modelName} not found`,
          success: false,
        });
      }

      return res.status(200).json({
        message: `${modelName} fetched successfully`,
        success: true,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: `Error while fetching ${modelName}`,
        success: false,
        error: error.message,
      });
    }
  };
};



// +++++++++++++++++++++++++++++++++++++++++++++++++++ Get All Data start +++++++++++++++++++++++++++ //
export const getAll = (Model, modelName = "Data") => {
  return async (req, res) => {
    try {
      const data = await Model.find();

      if (!data || data.length === 0) {
        return res.status(404).json({
          message: `No ${modelName} found`,
          success: false,
        });
      }

      return res.status(200).json({
        message: `${modelName} fetched successfully`,
        success: true,
        count: data.length,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: `Error while fetching ${modelName}`,
        success: false,
        error: error.message,
      });
    }
  };
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++ Get All Data end +++++++++++++++++++++++++++ //





// +++++++++++++++++++++++++++++++++++++++++++++++++++ Delete By Id Start +++++++++++++++++++++++++++ //
export const deleteById = (Model, modelName = "Data") => {
  return async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          message: "Invalid Id",
          success: false,
        });
      }

      const deletedData = await Model.findByIdAndDelete(id);

      if (!deletedData) {
        return res.status(404).json({
          message: `${modelName} not found`,
          success: false,
        });
      }

      return res.status(200).json({
        message: `${modelName} deleted successfully`,
        success: true,
        data: deletedData,
      });
    } catch (error) {
      return res.status(500).json({
        message: `Error while deleting ${modelName}`,
        success: false,
        error: error.message,
      });
    }
  };
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++ Delete By Id end +++++++++++++++++++++++++++ //



// +++++++++++++++++++++++++++++++++++++++++++++++++++ Updated By Id start +++++++++++++++++++++++++++ //
export const updateById = (Model, modelName = "Data") => {
  return async (req, res) => {
    try {
      const { id } = req.params;

      const data = await Model.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!data) {
        return res.status(404).json({
          success: false,
          message: `${modelName} not found`,
        });
      }

      return res.status(200).json({
        success: true,
        message: `${modelName} updated successfully`,
        data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++ Updated By Id end +++++++++++++++++++++++++++ //

