import Movie from '../models/Movie';
import SearchResult from '../models/SearchResult';
import { Reducer } from 'react';
import State from '../models/State';
import Action from '../models/Action';
import { FetchState } from '../models/FetchState';

export enum MoviesActionType {
  FetchMovies = 'Fetch Movies',
  FetchMoviesSuccess = 'Fetch Movies Success',
  FetchMoviesFailure = 'Fetch Movies Failure',
}

const moviesReducer: Reducer<
  State<Movie[]>,
  Action<SearchResult, MoviesActionType>
> = (state, action) => {
  switch (action.type) {
    case MoviesActionType.FetchMovies:
      return { ...state, state: FetchState.Loading };
    case MoviesActionType.FetchMoviesSuccess:
      return {
        ...state,
        state: FetchState.Success,
        data: action.payload ? action.payload.Search : [],
      };
    case MoviesActionType.FetchMoviesFailure:
      return { ...state, state: FetchState.Error };
    default:
      throw new Error();
  }
};

export default moviesReducer;
