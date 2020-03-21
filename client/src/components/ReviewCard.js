import React from "react";
import { Card, Rate } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import "../css/ReviewCard.css";

const { Meta } = Card;

const rateDescription = ["Terrible", "Bad", "Decent", "Good", "Wonderful"];
const difficultyDescription = [
  "Super Easy",
  "Easy",
  "Moderate",
  "Hard",
  "Super Hard"
];

const ReviewCard = props => {
  const { review } = props;

  return (
    <Card size="small" title={review.title} className="reviewCard">
      <p>{review.body}</p>
      Rating:{" "}
      <Rate disabled defaultValue={review.rating} tooltips={rateDescription} />
      <br />
      Difficulty:
      <Rate
        disabled
        defaultValue={review.difficulty}
        character={<FrownOutlined />}
        tooltips={difficultyDescription}
        className="difficultyDisplay"
      />
      <Meta description={`Grade: ${review.grade}`} />
    </Card>
  );
};

export default ReviewCard;
