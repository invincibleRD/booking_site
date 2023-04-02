// import clientPromise from "../lib/mongodb";

import Link from "next/link";

export default function Error() {
    return (
      <div>
        <h1>Booking Unsuccessfull!</h1>
        <Link href='../teachers'><button>Try Again</button></Link>
      </div>
    );
  }
  
  