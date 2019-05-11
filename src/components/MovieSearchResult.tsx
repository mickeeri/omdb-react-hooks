import React, { FC } from 'react';
import Movie from '../models/Movie';
import MovieItem from './MovieItem';
import { ResultList } from '../styles';

const MovieSearchResult: FC<{ movies: Movie[] }> = ({ movies = [] }) => {
  return (
    <ResultList>
      {movies.length ? (
        movies
          .filter(({ Poster }) => Poster !== 'N/A')
          .map(movie => <MovieItem key={movie.imdbID} movie={movie} />)
      ) : (
        <div>Found no results</div>
      )}
    </ResultList>
  );
};

export default MovieSearchResult;
