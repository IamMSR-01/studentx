import mongoose from "mongoose";

const mentorshipBookingSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming User model for mentors
    required: true,
  },
  mentee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming User model for mentees
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  scheduledAt: {
    type: Date,
    required: true,
  },
  durationMinutes: {
    type: Number,
    default: 30,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "completed", "cancelled"],
    default: "pending",
  },
  fee: {
    type: Number,
    required: true,
  },
  meetingLink: {
    type: String, // Could be Zoom/Meet link
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MentorshipBooking = mongoose.model(
  "MentorshipBooking",
  mentorshipBookingSchema
);

export default MentorshipBooking;