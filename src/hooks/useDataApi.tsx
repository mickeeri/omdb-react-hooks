import React, { useState, useReducer, useEffect } from 'react';
import dataFetchReducer, { FetchState } from '../reducers/dataFetchReducer';
import axios from 'axios';

function useDataApi(initialUrl: string, initialData: any) {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    state: FetchState.Pending,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url);

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  function doFetch(url: string) {
    setUrl(url);
  }

  return { ...state, doFetch };
}

export default useDataApi;
