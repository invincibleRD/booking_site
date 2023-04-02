import clientPromise from "../lib/mongodb";
import Link from "next/link";
import { useReducer, useState } from "react";
import axios from "axios";
import Form from "./form";

export default function Top({ teachers }) {
  // const [formData, setFromData] = useReducer(formReducer, {});
  // const [T_name, setT_name] = useState("Dipendra");
  // const [T_ID, setT_ID] = useState("1");
  // console.log(T_ID);
  // console.log(T_name);
  const [showComponents, setShowComponents] = useState(
    new Array(teachers.length).fill(false)
  );
  console.log(teachers.length);

  function handleClick(index) {
    const newShowComponents = [...showComponents];
    newShowComponents[index] = true;
    setShowComponents(newShowComponents);
  }

  return (
    <>
      <Link href="/movies">movies</Link>
      <div>
        <h1>Top Teachers of All Time</h1>
        <p>
          <small>(Available any time)</small>
        </p>
        <ul>
          {teachers.map((teach, index) => (
            <li key={teach._id}>
              <h2>{teach.name}</h2>
              <h3>{teach.bio}</h3>
              <p>
                {teach.qualifications}
                {teach._id}
              </p>
              <Link href={`/form?teacher=${teach.name}&teacherId=${teach._id}`}>
                <button>
                  Book
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("bookings");

    const teachers = await db.collection("teachers").find({}).toArray();

    return {
      props: { teachers: JSON.parse(JSON.stringify(teachers)) },
    };
  } catch (e) {
    console.error(e);
  }
}
