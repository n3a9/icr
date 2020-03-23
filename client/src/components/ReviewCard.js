import React from "react";
import { Card, Rate } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import "../css/ReviewCard.css";

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
      <div className="courseInfo">
        <div className="courseInfoItem">
          <h4>Rating</h4>
          <Rate
            disabled
            defaultValue={review.rating}
            tooltips={rateDescription}
          />
        </div>
        <div className="courseInfoItem">
          <h4>Difficulty</h4>
          <Rate
            disabled
            defaultValue={review.difficulty}
            character={<FrownOutlined />}
            tooltips={difficultyDescription}
            className="difficultyDisplay"
          />
        </div>
      </div>
      <p>{review.body}</p>
    </Card>
  );
};

export default ReviewCard;
