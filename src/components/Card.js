import React from "react";
import { ReactComponent as Icon } from "../assets/icons/icon.svg";
import user from "../assets/icons/user.png";

const Card = ({ userName, level, points, info }) => {
  return (
    <div className="container">
      <div className="drawer">
        <div className="user">
          <span>level 13</span>
          <div>
            <img src={user} style={{ width: "100%", height: "100%" }} />
          </div>
          <span>2626 points</span>
        </div>
        <div className="details">
          <h1>jane doe</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Group Name</span>
            <span>Joined January 2019</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Position/Role</span>
            <span>City, Country</span>
          </div>
          <div className="icons">
            <div>
              <span>AWARDS</span>
              <Icon />
              <span>2</span>
            </div>
            <div>
              <span>MATCHES</span>
              <Icon />
              <span>24</span>
            </div>
            <div>
              <span>PALS</span>
              <Icon />
              <span>13</span>
            </div>
            <div>
              <span>COFFEE</span>
              <Icon />
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <h1>jane doe</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
          volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
          pulvinar.
        </p>
      </div>
    </div>
  );
};

export default Card;
