import express from "express";
import auth from "../middleware/auth.js";
import {
  createReservation,
  getUserReservations,
  updateReservation,
  cancelReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

router.post("/", auth, createReservation);
router.get("/", auth, getUserReservations);
router.put("/:id", auth, updateReservation);
router.delete("/:id", auth, cancelReservation);

export default router;
