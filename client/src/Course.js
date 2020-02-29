import React from "react";

const Course = props => {
  return (
    <header className="header">
      <p>{props.match.params.name.replace(/([0-9])/, " $1")}</p>
    </header>
  );
};

export default Course;
