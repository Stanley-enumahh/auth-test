import mongoose from "mongoose";

const postSChema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    content: {
      type: String,
      require: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", postSChema);

export default Post;
