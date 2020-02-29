import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Home";
import Course from "./Course";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course/:name" component={Course} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
