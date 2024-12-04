import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentsSchemaModel = new Schema(
  {
    IDCard: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    },
  },
  {
    timestamps: true,
  }
);

const studentsModel = model("student", studentsSchemaModel);

export default studentsModel;
