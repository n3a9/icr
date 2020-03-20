import React from "react";
import { Card } from "antd";
import "../css/ReviewCard.css";

const ReviewCard = props => {
  const { review } = props;

  return (
    <Card size="small" title={review.title} className="reviewCard">
      <p>{review.body}</p>
    </Card>
  );
};

export default ReviewCard;
