import React, { useState, useEffect } from "react";
import courseJSON from "./data/courses.json";

const Course = props => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  useEffect(() => {
    setCourseTitle(props.match.params.name.replace(/([0-9])/, " $1"));

    for (let course of courseJSON) {
      if (course.title === courseTitle) {
        setCourseName(course.name);
        let parse = course.description.split(/([A-Z]\w+\s\d+)/g);
        parse.forEach((w, i) => {
          if (/([A-Z]\w+\s\d+)/g.test(w)) {
            parse[i] = (
              <a href={`https://icr.now.sh/course/${w.replace(/\s/g, "")}`}>
                {w}
              </a>
            );
          }
        }, parse);
        setCourseDescription(parse);
        break;
      }
    }
  }, [props.match.params.name, courseTitle]);

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
