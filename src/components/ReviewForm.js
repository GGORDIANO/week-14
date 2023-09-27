import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(reviewText);
    setReviewText('');
  }

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea 
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Leave a review..."
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;