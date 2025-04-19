import Resource from "../models/resource.model.js";

// Upload a new resource
export const uploadResource = async (req, res) => {
  try {
    const {
      title,
      subject,
      description,
      videoUrl,
      thumbnailUrl,
      noteUrl,
      isPublished,
    } = req.body;

    const newResource = new Resource({
      title,
      subject,
      description,
      videoUrl,
      thumbnailUrl,
      noteUrl,
      isPublished,
      uploadedBy: req.user._id,
    });

    const saved = await newResource.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all published resources
export const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find({ isPublished: true }).populate(
      "uploadedBy",
      "name"
    );
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single resource by ID
export const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id).populate(
      "uploadedBy",
      "name email"
    );
    if (!resource)
      return res.status(404).json({ message: "Resource not found" });

    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a resource (only uploader or admin)
export const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource)
      return res.status(404).json({ message: "Resource not found" });

    if (
      resource.uploadedBy.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this resource" });
    }

    const updated = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a resource (only uploader or admin)
export const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource)
      return res.status(404).json({ message: "Resource not found" });

    if (
      resource.uploadedBy.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this resource" });
    }

    await resource.deleteOne();
    res.status(200).json({ message: "Resource deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};