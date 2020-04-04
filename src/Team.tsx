import React from "react";

const Team: React.FC = () => {
  return (
    <div className="team-wrapper">
      <div className="teamProfile">
        <span className="team-icon">
          <img src="./Joshua-Nordstrom.jpg" alt="Joshua Nordstrom"></img>
        </span>
        <div>Joshua Nordstrom</div>
      </div>
      <div className="teamProfile">
        <span className="team-icon">
          <img src="./Tyler-Hurtt.jpg" alt="Tyler Hurtt"></img>
        </span>
        <div>Tyler Hurtt</div>
      </div>
      <div className="teamProfile">
        <span className="team-icon"></span>
        <div>Aris Razuri</div>
      </div>
      <div className="teamProfile">
        <span className="team-icon"></span>
        <div>Danny Scheiner</div>
      </div>
      <div className="teamProfile">
        <span className="team-icon"></span>
        <div>Michael Dinh</div>
      </div>
    </div>
  );
};

export default Team;
