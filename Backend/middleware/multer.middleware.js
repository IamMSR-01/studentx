// middleware/multer.js
import multer from "multer";
import path from "path";

// Use memory storage for direct buffer upload to Cloudinary
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, and .png files are allowed"), false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;