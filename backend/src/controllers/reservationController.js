import Reservation from "../models/Reservation.js";

export const createReservation = async (req, res) => {
  try {
    const { date, time, partySize, specialRequests } = req.body;
    const userId = req.user.userId;

    if (!date || !time || !partySize) {
      return res
        .status(400)
        .json({ message: "Date, time, and party size are required" });
    }

    const reservation = new Reservation({
      userId,
      date,
      time,
      partySize,
      specialRequests,
    });

    await reservation.save();

    res.status(201).json({
      message: "Reservation created successfully",
      reservation,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserReservations = async (req, res) => {
  try {
    const userId = req.user.userId;
    const reservations = await Reservation.find({ userId }).sort({
      date: -1,
    });

    res.json({ reservations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time, partySize, specialRequests, status } = req.body;

    const reservation = await Reservation.findByIdAndUpdate(
      id,
      { date, time, partySize, specialRequests, status },
      { new: true, runValidators: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json({
      message: "Reservation updated successfully",
      reservation,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findByIdAndUpdate(
      id,
      { status: "cancelled" },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.json({
      message: "Reservation cancelled successfully",
      reservation,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
