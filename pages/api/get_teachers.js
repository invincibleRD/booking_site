import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("bookings");

       const movies = await db
           .collection("teachers")
           .find({})
           .toArray();

       res.json(movies);
   } catch (e) {    
       console.error(e);
   }
};