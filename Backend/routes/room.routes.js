import express from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  bookRoom,
} from "../controller/room.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createRoom); // Create room
router.get("/", getAllRooms); // Get all available rooms
router.get("/:id", getRoomById); // Get room by ID
router.put("/:id", protect, updateRoom); // Update room
router.delete("/:id", protect, deleteRoom); // Delete room
router.put("/book/:id", protect, bookRoom); // Book a room

export default router;