import { useState, useReducer, useEffect } from 'react';
import moviesReducer, { MoviesActionType } from '../reducers/moviesReducer';
import { FetchState } from '../models/FetchState';
import { getOMDBUrl } from '../utils';
import axios from 'axios';

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
        const result = await axios.get(url);

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
    } else {
      // for testing
      // setUrl(getOMDBUrl('godfather'));
      // fetchData();
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
