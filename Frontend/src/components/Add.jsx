import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleAdd = (e) => {
    e.preventDefault()
    const user = {name, email}
    axios.post("http://localhost:8000/api/users",user )
    .then(()=>{
        console.log("User Added")
        navigate("/")

    })
    .catch((err)=>{
        console.log(err,"Error")
    })
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <label>Name</label>
        <input
          type="text"
          name={name}
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name={email}
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;
