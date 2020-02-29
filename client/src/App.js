import React from "react";
import "antd/dist/antd.css";
import "./css/App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>Illinois Course Review</p>
      </header>
      <Search />
    </div>
  );
}

export default App;
