// import clientPromise from "../lib/mongodb";
// import Link from "next/link";
import { useRouter } from "next/router";
import { useReducer, useState } from "react";
import axios from "axios";
import Success from "./components/success";
import Error from "./components/error";
import styles from "./styleform.module.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function Form() {
  const [formData, setFromData] = useReducer(formReducer, {});
  const [process, setProcess] = useState(false);
  const [processFailed, setProcessFailed] = useState(false);
  const [toemail, settoemail] = useState("");
  const router = useRouter();
  const teacher = router.query.teacher;
  const teacherId = router.query.teacherId;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Dont have proper data to book");
    formData.teacher = teacher;
    formData.teacher_ID = teacherId;
    console.log(formData);
    axios
      .post(`/api/set_bookings`, formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("Data uploaded successfully!");
          setProcess(true);
        } else {
          console.log("Error uploading data");
        }
      })
      .catch((err) => {
        console.log(err);
        setProcessFailed(true);
      });
  };

  return (
    <>
      {processFailed ? (
        <Error />
      ) : process ? (
        <Success />
      ) : (
        <div>
          <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.title}>Registration</div>
            <div className={styles.content}>
              <form className={styles.form}>
                <div className={styles.userDetails}>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Full Name</span>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Email</span>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Phone Number</span>
                    <input
                      type="number"
                      placeholder="Enter your Number"
                      required
                    />
                  </div>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Education</span>
                    <input type="Text" placeholder="Enter Education" required />
                  </div>
                  <div className={styles.input_box}>
                    <label className={styles.select}>Gender:</label>{" "}
                    <select className={styles.select1} name="gender" id="gender">
                      <option value="Male">Male </option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className={styles.input_box + ' ' + styles.selectDiv}>
                    {/* <div className={styles.selcectDiv}> */}
                    <label className={styles.select}>Language:</label>{" "}
                    <select  className={styles.select1} name="language" id="language">
                      <option value="English">English</option>
                      <option value="Hindi">hindi </option>
                    </select>
                    {/* </div> */}
                  </div>
                </div>
                <div className={styles.description}>
                    <span className={styles.details}>Description:</span>
                  <input className={styles.textArea} name="description"></input>
                </div>
              </form>
            </div>
          </div>
          </div>
          <div className={styles.container}>
            <div className={styles.title}>Enter Details for {teacher}</div>
            <div className={styles.content}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.userDetails}>
                  <span className={styles.details}>Full Name</span>
                  <input
                    type="text"
                    id="full_name"
                    onChange={setFromData}
                    name="full_name"
                    required
                    placeholder="Enter your name"
                  ></input>
                </div>
                  <label htmlFor="full_name">Fullname: </label>
                <br></br>  <label htmlFor="teacher">teacher: </label>
                <input
                  type="text"
                  id="teacher"
                  onChange={setFromData}
                  name="teacher"
                  required
                  placeholder="enter teacher name"
                ></input>
                <br></br>  <label htmlFor="education">education: </label>
                <input
                  type="text"
                  id="education"
                  onChange={setFromData}
                  name="education"
                  required
                  placeholder="latest education qualification"
                ></input>
                <br></br>  <label htmlFor="email">education: </label>
                <input
                  type="email"
                  id="email"
                  onChange={() => {
                    setFromData;
                    settoemail(event.target.value);
                  }}
                  name="email"
                  required
                  placeholder="enter email"
                ></input>
                <br></br>  <label htmlFor="language">language: </label>
                <input
                  type="text"
                  id="language"
                  onChange={setFromData}
                  name="language"
                  required
                  placeholder="enter language"
                ></input>
                <br></br>  <label htmlFor="description">description: </label>
                <input
                  type="text"
                  id="description"
                  onChange={setFromData}
                  name="description"
                  required
                  placeholder="enter description"
                ></input>
                <br></br> {" "}
                <label htmlFor="slot_date_time">Slote date time: </label>
                <input
                  type="datetime-local"
                  id="slot_date_time"
                  onChange={setFromData}
                  name="slot_date_time"
                  required
                  placeholder="enter slote date time"
                ></input>
                <br></br>
                <button>Click To Book</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Form;
