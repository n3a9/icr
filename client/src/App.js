import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./Home";
import Course from "./Course";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses/:id" render={props => <Course {...props} />} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
