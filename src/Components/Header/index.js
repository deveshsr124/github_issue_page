import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="first-header">
        <div className="header-title">
          {" "}
          <span>
            facebook/<span style={{ fontWeight: "600" }}>react</span>
          </span>{" "}
          <span>Public</span>
        </div>

        <div className="right-btns">
          <p>
            <i
              className="fa-regular fa-bell"
              style={{ paddingRight: "5px" }}
            ></i>
            Notifications
          </p>
          <p>
            <i className="fa-regular fa-star"></i> Star <span>175k</span>
          </p>
          <p>
            <i className="fa-solid fa-code-fork"></i> Fork <span>35.3k</span>
          </p>
        </div>
      </div>
      <div className="second-nav">
        <p>Code</p>
        <p>Issues</p>
        <p>Pull requests</p>
        <p>Actions</p>
        <p>Projects</p>
        <p>Wiki</p>
        <p>Security</p>
        <p>Insights</p>
      </div>
    </div>
  );
};

export default Header;
