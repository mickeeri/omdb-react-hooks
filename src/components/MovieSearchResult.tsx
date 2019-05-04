import React, { FC } from 'react';
import Movie from '../models/Movie';

const MovieSearchResult: FC<{ movies: Movie[] }> = ({ movies = [] }) => {
  return (
    <div>
      {movies.length ? (
        movies.map(movie => <div key={movie.imdbID}>{movie.Title}</div>)
      ) : (
        <div>Found no results</div>
      )}
    </div>
  );
};

export default MovieSearchResult;
