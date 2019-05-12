import React, { FC } from 'react';
import Movie from '../models/Movie';
import { MovieCard } from '../styles';

const MovieItem: FC<{ movie: Movie }> = ({ movie: { Title, Poster } }) => {
  return (
    <MovieCard data-testid="movie-card">
      <img src={Poster} alt={`${Title}`} />
    </MovieCard>
  );
};

export default MovieItem;
