import clientPromise from "../../lib/mongodb";
import Bookings_table from "../../models/bookingModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid HTTP POST method" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("bookings");
    const {
      full_name,
      teacher,
      education,
      email,
      language,
      description,
      slot_date_time,
    } = req.body;
    const currentDateTime = new Date().toISOString();
    const newBooking = new Bookings_table({
        full_name,
        teacher,
        education,
        email,
        language,
        description,
        slot_date_time,
        booking_time:currentDateTime,
      });

      await newBooking.save();

    res
      .status(200)
      .json({ message: "Booked Successfully!", Booking_entered: result.ops[0] });
  } catch (error) {
    res.status(500).json({ message: "Error While Booking!", error });
  }
}
