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
      gender,
      teacher_ID,
      phoneNo,
      language,
      description,
      slot_date_time,
    } = req.body;

    const currentDateTime = new Date().toISOString();
    const result = await db.collection("bookings_table").insertOne({
      full_name,
      teacher,
      education,
      email,
      teacher_ID,
      gender,
      phoneNo,
      language,
      description,
      slot_date_time,
      booking_time: currentDateTime,
    });

    res.status(200).json({ message: "Booked Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error While Booking!", error });
  }
}
