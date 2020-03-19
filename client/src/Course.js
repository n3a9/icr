import React, { useState, useEffect } from "react";
import courseJSON from "./data/courses.json";

const Course = props => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const title = props.match.params.name.replace(/([0-9])/, " $1");
  const course = courseJSON.find(course => course.title === title);

  useEffect(() => {
    setCourseTitle(title);
    setCourseName(course.name);
    let parse = course.description.split(/([A-Z]\w+\s\d+)/g);
    parse.forEach((w, i) => {
      if (/([A-Z]\w+\s\d+)/g.test(w)) {
        parse[i] = (
          <a href={`https://icr.now.sh/course/${w.replace(/\s/g, "")}`}>{w}</a>
        );
      }
    }, parse);
    setCourseDescription(parse);
  }, [title, course.name, course.description]);

  return (
    <>
      <header className="header">
        <h4>{courseName}</h4>
        <p>{courseTitle}</p>
      </header>
      <p className="description">{courseDescription}</p>
    </>
  );
};

export default Course;
