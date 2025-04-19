import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Internship", "Remote"],
    default: "Full-Time",
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    default: [],
  },
  salaryRange: {
    min: { type: Number },
    max: { type: Number },
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  applicants: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },

  postedAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;