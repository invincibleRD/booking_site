import clientPromise from "../lib/mongodb";

export default function Top({ teachers }) {
  return (
    <div>
      <h1>Top  Teachers of All Time</h1>
      <p>
        <small>(Available any time)</small>
      </p>
      <ul>
        {teachers.map((teach) => (
          <li>
            <h2>{teach.teacher.name}</h2>
            <h3>{teach.teacher.teacher_id}</h3>
            <p>{teach.teacher.qualifications}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
    try {
        const client = await clientPromise;
        const db = client.db("bookings");

        const teachers = await db
            .collection("bookings_table")
            .find({})
            .toArray();

        return {
            props: { teachers: JSON.parse(JSON.stringify(teachers)) },
        };
    } catch (e) {
        console.error(e);
    }
}
        