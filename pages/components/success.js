// import clientPromise from "../lib/mongodb";

import Link from "next/link";

export default function Success() {
  return (
    <div className="sucBox">
      <h1>Your Booking was Successfull</h1>
      <div className="links">
        <Link href="../teachers">
          <button>Book another session</button>
        </Link>
        <Link className="link2" href="/">
          <button>Home page</button>
        </Link>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        h1 {
        }
        .links {
          width: 70%;
        }
        .link2 {
          float: right;
        }
        .sucBox {
          display: flex;
          align-items: center;
          flex-direction: column;
          background-color: #03c04a;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid black;
        }
        @media only screen and (max-width: 600px) {
            h1{
                font-size:1rem;
            }
          .links {
              display:flex;
              flex-direction:column;
              align-items: center;

          }
        }
      `}</style>
    </div>
  );
}
