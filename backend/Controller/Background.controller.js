export const addBackground = async (req, res) => {
  try {
    const { heading, description, status, menuId } = req.body;
    if (!heading) {
      return res.status(404).json({
        message: "Enter Heading",
        success: false,
      });
    }

    if (!description) {
      return res.status(404).json({
        message: "Enter Description",
        success: false,
      });
    }

    if (!req.file) {
      return res.status(404).json({
        message: "Select Image !!",
        success: false,
      });
    }

    const data = {
      heading,
      description,
      status,
      menuId,
      image: req.file.path,
    };
    console.log(data);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
