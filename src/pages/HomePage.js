import React from 'react';
import movies from '../data';
import MovieCard from '../components/MovieCard';

function HomePage() {
  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;