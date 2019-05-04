import { useState, useReducer, useEffect } from 'react';
import moviesReducer, { MoviesActionType } from '../reducers/dataFetchReducer';
import axios from 'axios';
import { FetchState } from '../models/FetchState';
import { getOMDBUrl } from '../utils';

function useOmdbApi() {
  const [url, setUrl] = useState('');
  const [state, dispatch] = useReducer(moviesReducer, {
    state: FetchState.Pending,
    data: [],
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: MoviesActionType.FetchMovies });

      try {
        // TODO: use fetch instead
        const result = await axios(url);

        if (!didCancel) {
          dispatch({
            type: MoviesActionType.FetchMoviesSuccess,
            payload: result.data,
          });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: MoviesActionType.FetchMoviesFailure });
        }
      }
    };

    if (url) {
      fetchData();
    }

    return () => {
      didCancel = true;
    };
  }, [url]);

  function doFetch(query: string) {
    setUrl(getOMDBUrl(query));
  }

  return { ...state, doFetch };
}

export default useOmdbApi;
