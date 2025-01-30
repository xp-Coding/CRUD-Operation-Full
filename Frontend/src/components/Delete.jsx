import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {
  const [user , setUser ] = useState("") 
  const {id} = useParams();
const navigate = useNavigate()


  useEffect(()=>{
    axios.get(`http://localhost:8000/api/users/${id}`)
    .then((response)=>{
      console.log(response.data);
      setUser(response.data.name);
    })
  }, [id])

  const handleDel = ()=>{
    axios.delete(`http://localhost:8000/api/users/${id}`)
    .then(()=>{
      console.log("deleted");
      navigate("/")
    })
  }
  return (
    <div>
      <h1>DELETE user: {user}</h1>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={handleDel}>Delete User</button>
    </div>
  )
}

export default Delete