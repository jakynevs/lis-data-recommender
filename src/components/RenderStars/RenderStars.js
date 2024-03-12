import React from "react";
import { Star, StarsDisplay } from "./RenderStarsStyles";

const renderStars = (rating, onStarClick = null) => {
  const isClickable = typeof onStarClick === "function";
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      $active={i < rating}
      onClick={() => (isClickable ? onStarClick(i + 1) : null)}
      $cursorStyle={isClickable ? "pointer" : "default"} // Pass cursor style as a prop
    >
      {i < rating ? "★" : "☆"}
    </Star>
  ));
};

const StarsRating = ({ rating, onStarClick }) => {
  return <StarsDisplay>{renderStars(rating, onStarClick)}</StarsDisplay>;
};

export default StarsRating;
