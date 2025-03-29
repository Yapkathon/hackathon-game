import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <img src="Logo.png" alt="FinAge Logo" className="logo" />
      <h1 className="title">FinAge</h1>
      <p className="subtitle">Financial planning game</p>

      <button className="play-button">PLAY</button>

      <select className="server-select">
        <option>Please Select Server</option>
        <option>Server 1</option>
        <option>Server 2</option>
        <option>Server 3</option>
      </select>
    </div>
  );
};

export default HomePage;
