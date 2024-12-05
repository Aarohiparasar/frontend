import React from "react";
import { useLocation } from "react-router-dom";
import "./app.css"
function UserDetails() {
  const { state: user } = useLocation();

  if (!user) {
    return <p>User details not available</p>;
  }

  return (
    <div style={{background:"linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%)",height:"100vh"}}>
    <div className="card" >
      <h1>User Details</h1>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>City: {user.city}</p>
      <p>Contact: {user.contact_number}</p>
    </div>
    </div>
  );
}

export default UserDetails;
