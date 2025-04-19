import Room from "../models/room.model.js";

// Create a new room
export const createRoom = async (req, res) => {
  try {
    const {
      title,
      description,
      guests,
      rent,
      address,
      collegeNearby,
      distanceFromCollege,
      amenities,
      images,
    } = req.body;

    const room = new Room({
      title,
      description,
      guests,
      rent,
      address,
      collegeNearby,
      distanceFromCollege,
      amenities,
      images,
      postedBy: req.user._id,
    });

    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all available rooms
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true }).populate(
      "postedBy",
      "name email"
    );
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get room by ID
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate(
      "postedBy",
      "name email"
    );
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update room
export const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Book a room
export const bookRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    if (!room.isAvailable)
      return res.status(400).json({ message: "Room already booked" });

    room.bookedBy = req.user._id;
    room.bookedAt = new Date();
    room.isAvailable = false;

    await room.save();
    res.status(200).json({ message: "Room booked successfully", room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a room
export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};