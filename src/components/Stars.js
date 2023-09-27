import React, { useState } from 'react';

const Stars = ({ rating, onRate }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  }

  const handleMouseLeave = () => {
    setHoveredRating(0);
  }

  const handleClick = (index) => {
    onRate(index);
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map(index => (
        <span
          key={index}
          className={`star ${index <= (hoveredRating || rating) ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default Stars;
