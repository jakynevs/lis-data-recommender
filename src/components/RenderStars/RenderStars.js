import React from 'react';
import { Star, StarsDisplay } from './RenderStarsStyles';

const renderStars = (rating, onStarClick) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        active={i < rating}
        onClick={() => onStarClick(i + 1)} 
      >
        {i < rating ? '★' : '☆'}
      </Star>
    ));
  };
  
  const StarsRating = ({ rating, onStarClick }) => {
    return <StarsDisplay>{renderStars(rating, onStarClick)}</StarsDisplay>;
  };

  export default StarsRating;