import clientPromise from "../lib/mongodb";
import Link from 'next/link';


export default function Top({ teachers }) {
  return (
    <>
    <Link href="/movies">
      movies
      </Link>
    <div>
      <h1>Top  Teachers of All Time</h1>
      <p>
        <small>(Available any time)</small>
      </p>
      <ul>
        {teachers.map((teach) => (
          <li>
            <h2>{teach.name}</h2>
            <h3>{teach.bio}</h3>
            <p>{teach.qualifications}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}


export async function getStaticProps() {
    try {
        const client = await clientPromise;
        const db = client.db("bookings");

        const teachers = await db
            .collection("teachers")
            .find({})
            .toArray();

        return {
            props: { teachers: JSON.parse(JSON.stringify(teachers)) },
        };
    } catch (e) {
        console.error(e);
    }
}
        