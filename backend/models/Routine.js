import { Schema, model } from "mongoose";

const routineSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    schedule: {
      type: String, // ej: "Lunes, Miércoles y Viernes"
      required: true,
    },
    category: {
      type: String,
      enum: ["salud", "estudio", "trabajo", "personal"],
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Routine", routineSchema);
