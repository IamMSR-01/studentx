import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "owner"],
      default: "user",
    },
    phone: {
      type: Number,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    avatar: {
      type: String,
      default: "https://example.com/default-avatar.png",
    },
  },
  { timestamps: true }
);

// 🔐 Pre-save hook to hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if changed

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;