import React, { useState, useEffect } from "react";
import ReviewCard from "./components/ReviewCard";
import ReviewForm from "./components/ReviewForm";

import { getCourseByTitle } from "./utils/api";
import courseJSON from "./data/courses.json";

const Course = props => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const title = props.match.params.name.replace(/([0-9])/, " $1");
  const course = courseJSON.find(course => course.title === title);

  useEffect(() => {
    const fetchRatingReviews = async () => {
      const c = await getCourseByTitle(props.match.params.name);
      if (c) {
        setRating(c.result.rating);
        setReviews(c.result.reviews);
      }
    };

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
    fetchRatingReviews();
  }, [title, course.name, course.description, props.match.params.name]);

  return (
    <>
      <header className="header">
        <h4>{courseName}</h4>
        <p>{courseTitle}</p>
      </header>
      <p className="description">{courseDescription}</p>
      {reviews && reviews.map(r => <ReviewCard review={r} />)}
      <ReviewForm
        title={props.match.params.name}
        instructors={course.instructors}
      />
    </>
  );
};

export default Course;
