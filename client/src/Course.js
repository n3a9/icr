import React, { useState, useEffect, useCallback } from "react";
import { Button, Rate } from "antd";
import { FrownOutlined } from "@ant-design/icons";

import Search from "./components/Search";
import ReviewCard from "./components/ReviewCard";
import ReviewForm from "./components/ReviewForm";

import "./css/Course.css";
import { getCourseByTitle } from "./utils/api";
import courseJSON from "./data/courses.json";

const rateDescription = ["Terrible", "Bad", "Decent", "Good", "Wonderful"];
const difficultyDescription = [
  "Super Easy",
  "Easy",
  "Moderate",
  "Hard",
  "Super Hard"
];

const Course = props => {
  const [title] = useState(props.match.params.name.replace(/([0-9])/, " $1"));
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const course = courseJSON.find(course => course.title === title);

  const fetchRatingReviews = useCallback(async () => {
    const c = await getCourseByTitle(props.match.params.name);
    if (c) {
      setRating(c.result.rating / c.result.reviews.length);
      setDifficulty(c.result.difficulty / c.result.reviews.length);
      setReviews(c.result.reviews);
    }
  }, [props.match.params.name]);

  useEffect(() => {
    setName(course.name);
    let parse = course.description.split(/([A-Z]\w+\s\d+)/g);
    parse.forEach((w, i) => {
      if (/([A-Z]\w+\s\d+)/g.test(w)) {
        parse[i] = (
          <a href={`https://icr.now.sh/course/${w.replace(/\s/g, "")}`}>{w}</a>
        );
      }
    }, parse);
    setDescription(parse);
    fetchRatingReviews();
  }, [
    course.name,
    course.description,
    props.match.params.name,
    fetchRatingReviews
  ]);

  return (
    <>
      <header className="header">
        <Search />
        <h4>{name}</h4>
      </header>
      <p>{title}</p>
      <p className="description">{description}</p>
      <div className="courseInfo">
        <div className="courseInfoItem">
          <h4>Rating</h4>
          <Rate disabled value={rating} tooltips={rateDescription} />
        </div>
        <div className="courseInfoItem">
          <h4>Difficulty</h4>
          <Rate
            disabled
            value={difficulty}
            character={<FrownOutlined />}
            tooltips={difficultyDescription}
            className="difficultyDisplay"
          />
        </div>
      </div>

      <Button
        type="primary"
        onClick={() => {
          setModalVisible(true);
        }}
        className="reviewButton"
      >
        Add a review
      </Button>

      <h2>Reviews</h2>
      {reviews && reviews.map(r => <ReviewCard review={r} />)}

      <ReviewForm
        visible={modalVisible}
        title={props.match.params.name}
        instructors={course.instructors}
        hideModal={() => {
          setModalVisible(false);
          fetchRatingReviews();
        }}
      />
    </>
  );
};

export default Course;
