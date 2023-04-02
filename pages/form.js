// import clientPromise from "../lib/mongodb";
// import Link from "next/link";
import { useRouter } from 'next/router';
import { useReducer, useState } from "react";
import axios from "axios";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

 function Form( ) {
  const [formData, setFromData] = useReducer(formReducer, {});
  const router = useRouter();
  const teacher = router.query.teacher;
  const teacherID = router.query.teacherID;
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Dont have proper data to book");
      formData.teacher=teacher;
      formData.teacher_ID=teacherId;
    console.log(formData);
    axios
      .post(`/api/set_bookings`, formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div> {teacher}</div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="full_name">Fullname: </label>
        <input
          type="text"
          id="full_name"
          onChange={setFromData}
          name="full_name"
          required
          placeholder="enter your name"
        ></input>
        <br></br>  <label  htmlFor="teacher">teacher: </label>
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
          onChange={setFromData}
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
        <br></br>  <label htmlFor="slot_date_time">Slote date time: </label>
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
    </>
  );
}
export default Form;