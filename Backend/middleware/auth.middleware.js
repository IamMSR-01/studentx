import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import FreelanceProject from "../models/freelancing.model.js";

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } else {
      res.status(401).json({ message: "Not authorized, token missing" });
    }
  } catch (error) {
    res.status(401).json({ message: "Not authorized, invalid token" });
  }
};

const projectOwner = async (req, res, next) => {
  const project = await FreelanceProject.findById(req.params.id);
  if (project && project.postedBy.toString() === req.user._id.toString()) {
    next();
  } else {
    res
      .status(403)
      .json({ message: "You are not authorized to modify this project" });
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin access required" });
  }
};

export default protect;