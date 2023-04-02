// import clientPromise from "../lib/mongodb";

import Link from "next/link";

export default function Profile() {
    return (
      <div>
        <h1>Your Booking was Successull</h1>
        <Link href='../teachers'><button>Click to book another  session</button></Link>
      </div>
    );
  }
  
  