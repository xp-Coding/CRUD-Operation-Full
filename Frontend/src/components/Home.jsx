import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setAllUsers(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="all-users">
        <div className="user-info">
          <h1>User management App</h1>
          <button>
            <Link to="/add">Add</Link>
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th colSpan={2}>Acion</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => {
                const { _id, name, email } = user;
                return (
                  <tr key={_id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <Link to={`/edit/${_id}`}>Edit</Link>
                    </td>
                    <td>
                      <Link to={`/delete/${_id}`}>Delete</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
