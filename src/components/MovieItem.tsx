import React, { FC } from 'react';
import Movie from '../models/Movie';
import { MovieCard } from '../styles';

const MovieItem: FC<{ movie: Movie }> = ({
  movie: { Title, Poster, Year },
}) => {
  return (
    <MovieCard>
      <div className="poster-container">
        <div className="poster-wrapper">
          <div
            className="poster"
            style={{ backgroundImage: `url(${Poster})` }}
          />
        </div>
      </div>
    </MovieCard>
  );
};

export default MovieItem;
