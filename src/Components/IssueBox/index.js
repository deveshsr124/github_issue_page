import React, { useState, useEffect } from "react";
import "./issuebox.css";
import IssueComponent from "../Issue";
import axios from "axios";
const IssueBox = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const result = await axios.get(
      "https://api.github.com/repos/facebook/react/issues"
    );

    if (result.status === 200) {
      setData(result.data);
    } else {
      setData("error occured");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="issue-box">
      <div className="header-issue">
        <div className="left-section">
          <p>
            <i
              className="fa-regular fa-circle-dot"
              style={{ paddingRight: "5px" }}
            ></i>
            674 Open
          </p>
          <p>
            <i
              className="fa-solid fa-check"
              style={{ paddingRight: "5px" }}
            ></i>
            10,743 Closed
          </p>
        </div>
        <div className="right-section">
          <p>
            Author <i className="fa-solid fa-caret-down"></i>
          </p>
          <p>
            Label <i className="fa-solid fa-caret-down"></i>
          </p>
          <p>
            Projects <i className="fa-solid fa-caret-down"></i>
          </p>
          <p>
            Milestones <i className="fa-solid fa-caret-down"></i>
          </p>
          <p>
            Assignee <i className="fa-solid fa-caret-down"></i>
          </p>
          <p>
            Sort <i className="fa-solid fa-caret-down"></i>
          </p>
        </div>
      </div>
      {data ? (
        <>
          {data.map((item) => {
            return <IssueComponent item={item} key={item.id} />;
          })}
        </>
      ) : (
        <p style={{ textAlign: "center" }}>loading...</p>
      )}
    </div>
  );
};

export default IssueBox;
