import React, { useState, useCallback, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

const Course = props => {
  return <p>{props.match.params.id}</p>;
};

export default Course;
