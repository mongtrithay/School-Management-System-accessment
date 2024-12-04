import mongoose from "mongoose";
const footballerSchema = new mongoose.Schema(
  {
    className: { require: true, type: String },
    roomNumber: { require: true, type: String },
  },
  { timestamps: true }
);

export default mongoose.model("class", footballerSchema);
