// import clientPromise from "../lib/mongodb";
// import Link from "next/link";
import { useRouter } from "next/router";
import { useReducer, useState } from "react";
import axios from "axios";
import Success from "./components/success";
import Navbar from "./components/navbar";
import Error from "./components/error";
import styles from "./styleform.module.css";
import Loading from "./components/loading";

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
  const [bookingProcessing, setBookingProcessing] = useState(false);
  const router = useRouter();
  const teacher = router.query.teacher;
  const teacherId = router.query.teacherId;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.keys(formData).length == 0 ||
      !formData.email ||
      !formData.slot_date_time
    ) {
      alert("Enter details to proceed with booking");
      return console.log("Dont have proper data to book");
    }
    if (formData.gender === undefined) formData.gender = "male";
    formData.teacher = teacher;
    formData.teacher_ID = teacherId;
    // console.log(formData);
    setBookingProcessing(true);
    axios
      .post(`/api/set_bookings`, formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setBookingProcessing(false);
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
      {bookingProcessing ? (
        <Loading event="Confirming your boooking..." />
      ) : processFailed ? (
        <Error />
      ) : process ? (
        <Success />
      ) : (
        <div className={styles.body}>
          <div style={{paddingBottom:'40px'}}>
            <Navbar />
          </div>
          <div className={styles.container}>
            <div className={styles.title}>Booking Details </div>
            <div className={styles.content}>
              <form className={styles.form}>
                <div className={styles.userDetails}>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Full Name</span>
                    <input
                      onChange={setFromData}
                      type="text"
                      name="full_name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Email</span>
                    <input
                      onChange={setFromData}
                      name="email"
                      type="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className={styles.input_box}>
                    <span className={styles.details}>Phone Number</span>
                    <input
                      onChange={setFromData}
                      name="phoneNo"
                      type="text"
                      placeholder="Enter your Number"
                      required
                    />
                  </div>

                  <div className={styles.input_box}>
                    <span className={styles.details}>Education</span>
                    <input
                      onChange={setFromData}
                      name="education"
                      type="Text"
                      placeholder="Enter Education"
                      required
                    />
                  </div>
                  <div className={styles.input_box + " " + styles.datetimeSize}>
                    <span className={styles.details}>Session time</span>
                    <input
                      onChange={setFromData}
                      name="slot_date_time"
                      type="datetime-local"
                      placeholder="Choose slote time"
                      required
                    />
                  </div>
                  <div className={styles.input_box}>
                    <label className={styles.select}>Gender:</label>{" "}
                    <select
                      onChange={setFromData}
                      name="gender"
                      className={styles.select1}
                      id="gender"
                    >
                      <option value="Male">Male </option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  {/* <div className={styles.input_box + " " + styles.selectDiv}>
                      <label className={styles.select}>
                        Preffered Language:
                      </label>{" "}
                      <select
                        onChange={setFromData}
                        className={styles.select1}
                        name="language"
                        id="language"
                      >
                        <option value="English">English</option>
                        <option value="Hindi">hindi </option>
                      </select>
                    </div> */}
                </div>
                <div className={styles.description}>
                  <textarea
                    className={styles.textArea}
                    onChange={setFromData}
                    placeholder="Enter topics you want to discuss..."
                    name="description"
                  ></textarea>
                </div>
                <div className={styles.button}>
                  <input
                    onClick={handleSubmit}
                    type="submit"
                    value="Confirm Booking"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        html,
        body {
          height: 100vh;
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
        .mainContainer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
export default Form;
