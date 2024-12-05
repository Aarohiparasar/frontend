import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "./assets/logo1.png";
import Logo from "./assets/Logo.png";
import text from "./assets/text.png";
import "./app.css"
function SearchResults() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get('name');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/search?name=${name}`);
        setUsers(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Error fetching data');
      }
    };
    fetchUsers();
  }, [name]);

  return (
    <div className="SearchResults">
       <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "605.8",
          boxShadow: " 0px 1.41px 8.43px 0px #00000040",
          width: "auto",
          height: "111px",
        }}
      >
        <div  style={{ marginTop: "42px", width: "220px",marginLeft:"-11px" }}>
          <img src={logo} style={{ backgroundColor: "blue", padding: "6px" }} />
          <img src={text} style={{ width: "142px", height: "50px" }} />
        </div>
        
      </nav>
      <div className='cardform'>
      {errorMessage && <p>{errorMessage}</p>}
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        
        users.map((user, index) => (
          <div key={index} className="card">
            <h3>{user.first_name} {user.last_name}</h3>
            <p>City: {user.city}</p>
            <p>Contact: {user.contact_number}</p>
            <button onClick={() => navigate(`/user/${index}`, { state: user })}>
              Fetch Details
            </button>
          </div>
        ))
      )}</div>
    </div>
  );
}

export default SearchResults;
