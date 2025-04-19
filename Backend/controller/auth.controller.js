import User from "../models/user.models.js";
import cloudinary from "../config/cloudinary.config.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signup = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Validate input fields
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if file exists
    let avatarUrl = "https://example.com/default-avatar.png";
    if (req.file) {
      const uploadedImage = await cloudinary.uploader.upload_stream(
        { resource_type: "image", folder: "user_avatars" },
        (error, result) => {
          if (error) throw new Error("Cloudinary Upload Failed");
          avatarUrl = result.secure_url;
        }
      );

      // Pipe the buffer into cloudinary upload stream
      const streamifier = await import("streamifier");
      streamifier.createReadStream(req.file.buffer).pipe(uploadedImage);
    }

    // Save user
    const newUser = new User({
      name,
      email,
      password,
      phone,
      role,
      avatar: avatarUrl,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // 3. Generate JWT token
    const token = generateTokenAndSetCookie(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logout = (req, res) => {
  // Clear the cookie (if JWT is stored in cookies)
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

export const getUserById = async (req, res) => {
  try {
    // Access user ID from params or the authenticated user (from middleware)
    const { id } = req.params;

    // If id exists in the request params, we use that; otherwise, we fetch the authenticated user (from the token)
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database (excluding password)
    const users = await User.find().select("-password");

    // If no users found
    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};