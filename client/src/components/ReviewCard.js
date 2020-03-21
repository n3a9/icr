import React from "react";
import { Card } from "antd";
import "../css/ReviewCard.css";

const { Meta } = Card;

const ReviewCard = props => {
  const { review } = props;

  return (
    <Card size="small" title={review.title} className="reviewCard">
      <p>{review.body}</p>
      <Meta description={`Grade: ${review.grade}`} />
      <Meta description={`Rating: ${review.grade}`} />
      <Meta description={`Difficulty: ${review.difficulty}`} />
    </Card>
  );
};

export default ReviewCard;
