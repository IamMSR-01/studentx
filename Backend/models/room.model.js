import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  guests: {
    type: Number,
    required: true,
    min: 1, // At least one guest
  },
  rent: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  collegeNearby: {
    type: String, // Name of the college
    required: true,
  },
  distanceFromCollege: {
    type: Number, // in meters or kilometers
    default: 0,
  },
  amenities: {
    type: [String], // e.g. ['WiFi', 'AC', 'Laundry']
    default: [],
  },
  images: {
    type: [String], // URLs to images
    default: [],
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bookedAt: {
    type: Date,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;