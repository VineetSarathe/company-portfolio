const express = require("express");
const router = express.Router();

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");

const authMiddleware = require("../middleware/authMiddleware");

// PUBLIC
router.get("/", getEvents);

// ADMIN ONLY
router.post("/", authMiddleware, createEvent);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

module.exports = router;