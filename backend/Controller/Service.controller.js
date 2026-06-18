export const addService = async (req, res) => {
  try {
    const { heading, subheading, description } = req.body;
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
