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
          <div className={styles.name}>{props.name}</div>
          <p className={styles.description}>{props.bio}</p>

          <Link
            style={{textDecoration: "none"}}
            href={`/form?teacher=${props.name}&teacherId=${props.teacherId}`}
          >
            <div className={styles.button}>Book</div>
          </Link>
        </div>
      </div>
    </>
  );
}
