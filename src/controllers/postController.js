import Post from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
  try {
    const { page, limit, skip } = req.pagination;
    const posts = await Post.find().skip(skip).limit(limit);

    res.status(200).json({
      meassage: "Posts fetched successfully",
      data: posts,
      pagination: { page, limit },
    });
  } catch (e) {
    res.status(500).json({ message: "intenal server error" });
  }
};
