// import clientPromise from "../lib/mongodb";

import Link from "next/link";

export default function Success() {
  return (
    <div className="hi">

    <div className="sucBox">
      <div className="note">Your Booking was Successfull.</div>
      <div className="note">Please check your Email.</div>
      <div className="links">
        <Link className="link1" href="../teachers">
          <div className="book">Book another session</div>
        </Link>
        <Link className="link2" href="/">
          <div className="home">Home page</div>
        </Link>
      </div>
    </div>
      <style jsx global>{`
        html,
        body {
          min-height:100vh;
          background: linear-gradient(135deg, greenyellow, #4070f4);
        //   display: flex;
        //   flex-direction: column;
        //   align-items: center;
          padding: 0;
          margin: auto;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        h1 {
        }
        .note{
          font-size:20px;
          padding-bottom:10px;
        }
        .links {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 70%;
        }
        .link1,
        .link2 {
          padding: 5px;
          text-decoration: none;
          font-size: 1rem;
        }
        .home,
        .book {
          font-weight:500;
          border-radius: 5px;
          padding: 8px;
        }
        .book {
          max-width: 180px;
        //   color: white;
          background: greenyellow;
        }
        .home {
          color: white;
          background: #4070f4;
          float: right;
        }
        .book {
        }
        .sucBox {
          color:white;
          margin: auto;
          margin-top:20px;
          max-width: 700px;
          display: flex;
          align-items: center;
          flex-direction: column;
        //   background-color: greenyellow;
          padding: 20px;
          border-radius: 10px;
        }
        @media only screen and (max-width: 700px) {
            .sucBox{
                margin:15px;
            }
            h2{
              font=-size:.7rem;
            }
          h1 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
