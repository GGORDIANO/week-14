import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars'; 

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews || []);
  const [rating, setRating] = useState(movie.rating || 0);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  }

  const handleRate = (newRating) => {
    setRating(newRating);
  }

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <p>Rating: {rating}</p>
      <Stars rating={rating} onRate={handleRate} />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
}

export default Movie;
