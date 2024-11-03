import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../data';

function MovieDescription() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="container movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        src={movie.trailer}
        title={`${movie.title} Trailer`}
        allowFullScreen
      ></iframe>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default MovieDescription;