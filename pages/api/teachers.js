import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("bookings");

       const teacher = await db
           .collection("bookings_table")
           .find({})
           .toArray();

       res.json(teacher);
   } catch (e) {
       console.error(e);
   }
};