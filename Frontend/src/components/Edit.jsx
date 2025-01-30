import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {id} = useParams();
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/users/${id}`).then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
    });
  }, [id])
  

  const handleEdit = (e) => {
    e.preventDefault();
    const user = { name, email };
    axios.put(`http://localhost:8000/api/users/${id}`, user).then(() => {
      console.log("user updated");
      navigate("/")
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleEdit}>
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
    </div>
  );
}

export default Edit;
