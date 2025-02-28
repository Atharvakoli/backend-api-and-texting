const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Author = model("Author", authorSchema);
module.exports = { Author };
