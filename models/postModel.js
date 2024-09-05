const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: 55,
      required: true,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
    tags: {
        type: [String],
        required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    read_count: {
      type: Number,
      default: 0,
    },
    read_time: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

postSchema.pre("save", function (next) {
  if (this.isModified("read_time"))
    this.read_time = countReadTime(this.content);
  next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
