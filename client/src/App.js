import React from "react";
import "antd/dist/antd.css";
import "./css/App.css";
import Search from "./Search";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>Illinois Course Review</p>
      </header>
      <Course name="hello2" />
      {/* <Search /> */}
    </div>
  );
}

export default App;
