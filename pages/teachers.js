import clientPromise from "../lib/mongodb";
import Link from "next/link";
import { useReducer } from "react";


const formReducer=(state,event)=>{
  return{
    ...state,
    [event.target.name]:event.target.value
  }
}


export default function Top({ teachers }) {


  const[formData,setFromData]=useReducer(formReducer,{});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }

  return (
    <>
      <Link href="/movies">movies</Link>
      <div>
        <h1>Top Teachers of All Time</h1>
        <p>
          <small>(Available any time)</small>
        </p>
        <ul>
          {teachers.map((teach) => (
            <li>
              <h2>{teach.name}</h2>
              <h3>{teach.bio}</h3>
              <p>{teach.qualifications}</p>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label for="full_name">Fullname: </label>
        <input type="text" id="full_name" onChange={setFromData} name="full_name"  required placeholder="enter your name"></input>
        <br></br>
        <label for="teacher">teacher: </label>
        <input type="text" id="teacher" onChange={setFromData} name="teacher" required placeholder="enter teacher name"></input>
        <br></br>
        <label for="education">education: </label>
        <input type="text" id="education" onChange={setFromData} name="education" required placeholder="latest education qualification"></input>
        <br></br>
        <label for="email">education: </label>
        <input type="email" id="email" onChange={setFromData} name="email" required  placeholder="enter email"></input>
        <br></br>
        <label for="language">language: </label>
        <input type="text" id="language" onChange={setFromData} name="language" required  placeholder="enter language"></input>
        <br></br>
        <label for="description">description: </label>
        <input type="text" id="description" onChange={setFromData} name="description" required  placeholder="enter description"></input>
        <br></br>
        <label for="slot_date_time">Slote date time: </label>
        <input type="datetime-local" id="slot_date_time" onChange={setFromData} name="slot_date_time" required  placeholder="enter slote date time"></input>
        <br></br>
        <button>Click To Book</button>
      </form>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("bookings");

    const teachers = await db.collection("teachers").find({}).toArray();

    return {
      props: { teachers: JSON.parse(JSON.stringify(teachers)) },
    };
  } catch (e) {
    console.error(e);
  }
}
