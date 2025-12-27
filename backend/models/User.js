import { model, Schema } from "mongoose";

userSchema = new Schema  ({
     userId: {
        type: Number,

     },
    preferences: {
      type: Object,
      default: {},
    },
    toneMotivation: {
      type: String,
      enum: ["positivo", "estricto", "neutral"],
      default: "positivo",
    },
  },
  {
    timestamps: true,
});