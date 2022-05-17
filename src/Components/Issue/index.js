import React from "react";
import "./issue.css";
const Issue = ({ item }) => {
  return (
    <div className="issue-component">
      <i
        className="fa-regular fa-circle-dot"
        style={{ paddingRight: "10px", color: "#1A7F37" }}
      ></i>
      <span className="issue-title">{item.title}</span>
      {item.labels.length > 0
        ? item.labels.map((status) => {
            return (
              <span
                className="status"
                key={status.id}
                style={{
                  backgroundColor: `#${status.color}`,
                  borderColor: `#${status.color}`,
                  color: status.color === "b60205" ? "white" : "black",
                }}
              >
                {status.name}
              </span>
            );
          })
        : null}

      <br />
      <div className="details">
        {" "}
        <span>#{item.number}</span>
        <span className="opened-by-details">Opened by {item.user.login}</span>
      </div>
    </div>
  );
};

export default Issue;
