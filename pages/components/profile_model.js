// import clientPromise from "../lib/mongodb";
import Link from "next/link";
import styles from "./styles.module.css";



export default function Profile(props) {
  return (
    <>
      <div className={styles.card} >
        <div className={styles.image_content}>
          <span className={styles.overlay}></span>

          <div className={styles.card_image}>
            {/* <!--<img src="images/profile1.jpg" alt="" className="card-img">--> */}
          </div>
        </div>

        <div className={styles.card_content}>
          <h2 className={styles.name}>{props.name}</h2>
          <p className={styles.description}>
          {props.bio}
          </p>

          <button className={styles.b1} >View More</button>
        </div>
      </div>
      <div className="profileBox">
        <h2>{props.name}</h2>
        <h3>{props.bio}</h3>
        <p>{props.qualification}</p>
        <Link href={`/form?teacher=${props.name}&teacherId=${props._id}`}>
          <button>Book</button>
        </Link>
      </div>
    </>
  );
}
