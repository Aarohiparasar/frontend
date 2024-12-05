import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './app.css'
import logo from "./assets/logo1.png";
import Logo from "./assets/Logo.png";
import text from "./assets/text.png";
import v1 from "./assets/v1.png";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?name=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="Home" style={{background:"linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%)",height:"97vh"
    }}>
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
        <div style={{ marginTop: "42px", width: "220px" }}>
          <img src={logo} style={{ backgroundColor: "blue", padding: "6px" }} />
          <img src={text} style={{ width: "142px", height: "50px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "42.17px",
            marginRight: "42.06",
            marginTop: "42px",
          }}
        >
          <a target="_blank" rel="noopener noreferrer">
            Search
          </a>
          <a
            href="https://girmantech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:contact@girmantech.com">Contact</a>
        </div>
      </nav>
      <div style={{ display: "flex", flexDirection: "column",gap:"50px",width:"798px",height:"251px",marginTop:"140px",marginLeft:"440px",marginRight:"571px"}}>
        <img src={v1} style={{ width: "771px", height: "120px" }} />
        <input
        className="input"
          type="text"
          placeholder="Enter user name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
}

export default Home;
