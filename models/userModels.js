const mongoose = require("mongoose");
const useSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add Password"],
    },
  },
  {
    timestamps: true,
  }
);
module.export = mongoose.model("User", useSchema);
