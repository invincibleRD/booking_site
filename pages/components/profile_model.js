// import clientPromise from "../lib/mongodb";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
export default function Profile(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_content}>
          <span className={styles.overlay}></span>

          <div className={styles.card_image}>
            <div className={styles.imgDiv}>
              <Image
                unoptimized
                className={styles.image}
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Not Available"
                width={140}
                height={140}
              />
            </div>
          </div>
        </div>

        <div className={styles.card_content}>
          <h2 className={styles.name}>{props.name}</h2>
          <p className={styles.description}>{props.bio}</p>

          <Link
            href={`/form?teacher=${props.name}&teacherId=${props.teacherId}`}
          >
            <button className={styles.button}>Book</button>
          </Link>
        </div>
      </div>
    </>
  );
}
