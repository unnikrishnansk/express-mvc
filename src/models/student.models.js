const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollid: { type: Number, required: true },
    currentBatch: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


module.exports = mongoose.model("student", studentSchema);
