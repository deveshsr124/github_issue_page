import React from "react";
import Header from "../Header";
import IssueBox from "../IssueBox";
const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <IssueBox />
      </div>
    </div>
  );
};

export default Home;
