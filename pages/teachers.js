import clientPromise from "../lib/mongodb";
import Link from "next/link";
import { useReducer, useState } from "react";
import axios from "axios";
import Profile from "./components/profile_model";
import styles from "./styles1.module.css";
import Navbar from "./components/navbar";
export default function Top({ teachers }) {
  return (
    <div className={styles.head}>
      {/* <Link href="/movies">movies</Link> */}
      <Navbar />
      {/* <div className={styles.logo}>Top Teachers of All Time</div> */}
      <div className={styles.teachersList}>
        {teachers.map((teach) => (
          <Profile
            key={teach._id}
            name={teach.name}
            teacherId={teach._id}
            bio={teach.bio}
            qualifications={teach.qualification}
          />
        ))}
      </div>
      <style jsx global>{`
        html,
        body {
          background: linear-gradient(135deg, greenyellow, #4070f4);
          padding: 0;
          // margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        @media (max-width: 700px) {
          body{
            margin:0;
          }
      }
      `}</style>
    </div>
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
