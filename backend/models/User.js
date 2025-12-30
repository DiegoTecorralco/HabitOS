import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    lastname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "El correo electrónico no es válido",
      ],
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, 
    },

    numberPhone: {
      type: String,
      trim: true,
      match: [/^\d{10}$/, "El número debe tener 10 dígitos"],
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
  }
);

const User = model("User", userSchema);
export default User;
