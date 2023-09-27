import React from 'react';
import MovieList from './components/MovieList';


const App = () => {
  const movies = [
    {
      id: 1,
      title: "Step Brothers",
      imageUrl: "https://is3-ssl.mzstatic.com/image/thumb/CpevCAlPTGi_Mq-MJwh9QA/1200x675mf.jpg",
      rating: 4.5,
      reviews: ["Great movie!", "Loved it!"]
    },
    // Add more movies as needed
  ];

  return (
    <div className="app">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

