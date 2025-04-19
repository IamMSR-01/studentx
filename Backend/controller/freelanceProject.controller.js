import FreelanceProject from "../models/freelancing.model.js";
import User from "../models/user.models.js";

// Create a new freelance project
export const createFreelanceProject = async (req, res) => {
  try {
    const { title, description, budget, deadline, category, skillsRequired } =
      req.body;

    // Check if all required fields are present
    if (!title || !description || !category) {
      return res
        .status(400)
        .json({ message: "Title, description, and category are required" });
    }

    // Create and save the freelance project
    const project = new FreelanceProject({
      title,
      description,
      budget,
      deadline,
      category,
      skillsRequired,
      postedBy: req.user._id, // Automatically associate project with logged-in user
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all freelance projects
export const getAllFreelanceProjects = async (req, res) => {
  try {
    const projects = await FreelanceProject.find().populate("postedBy", "name");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific freelance project by ID
export const getFreelanceProjectById = async (req, res) => {
  try {
    const project = await FreelanceProject.findById(req.params.id).populate(
      "postedBy",
      "name"
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a freelance project
export const updateFreelanceProject = async (req, res) => {
  try {
    const project = await FreelanceProject.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a freelance project
export const deleteFreelanceProject = async (req, res) => {
  try {
    const project = await FreelanceProject.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit a proposal for a freelance project
export const submitProposal = async (req, res) => {
  try {
    const project = await FreelanceProject.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (!project.isOpen) {
      return res
        .status(400)
        .json({ message: "This project is closed for proposals" });
    }

    const { message, proposedAmount } = req.body;

    // Add proposal to the project
    const proposal = {
      freelancer: req.user._id, // Logged-in user is the freelancer
      message,
      proposedAmount,
    };

    project.proposals.push(proposal);
    await project.save();

    res
      .status(201)
      .json({ message: "Proposal submitted successfully", proposal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};