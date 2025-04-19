import mongoose from 'mongoose';

const freelanceProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    min: { type: Number },
    max: { type: Number }
  },
  deadline: {
    type: Date
  },
  category: {
    type: String, // e.g., 'Web Development', 'Graphic Design'
    required: true
  },
  skillsRequired: {
    type: [String], // e.g., ['React', 'Node.js']
    default: []
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  proposals: [
    {
      freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      message: String,
      proposedAmount: Number,
      status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
      },
      submittedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  isOpen: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const FreelanceProject = mongoose.model('FreelanceProject', freelanceProjectSchema);

export default FreelanceProject;