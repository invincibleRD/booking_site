import clientPromise from "../lib/mongodb";
import Link from "next/link";
import { useReducer, useState } from "react";
import axios from "axios";
import Profile from "./components/profile_model";

export default function Top({ teachers }) {

  return (
    <>
      <Link href="/movies">movies</Link>
      <div>
        <h1>Top Teachers of All Time</h1>
        <p>
          <small>(Available any time)</small>
        </p>
        <ul>
          {teachers.map((teach) => (
              <Profile key={teach._id} name={teach.name} bio={teach.bio} qualifications={teach.qualification}/>
              
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
