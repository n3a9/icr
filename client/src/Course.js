import React, { useState, useCallback, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

const Course = props => {
  return (
    <header className="header">
      <p>{props.match.params.name.replace(/([0-9])/, " $1")}</p>
    </header>
  );
};

export default Course;
