import React from "react";
import Search from "./components/Search";

import "antd/dist/antd.css";
import "./css/App.css";

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
