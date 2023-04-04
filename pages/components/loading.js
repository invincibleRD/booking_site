export default function Loading(props) {
  return (
    <div className="container">
      <div className="cen">
        <h3 style={{ color: "white" }}>{props.event}</h3>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .cen{
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
            height:100vh;
            background: linear-gradient(135deg, greenyellow, #4070f4);
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
