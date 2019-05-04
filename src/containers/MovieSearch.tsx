import React, { Fragment, useState } from 'react';
import useOmdbApi from '../hooks/useDataApi';
import MovieSearchResult from '../components/MovieSearchResult';
import { FetchState } from '../models/FetchState';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const { data, state, doFetch } = useOmdbApi();

  return (
    <Fragment>
      <h1>Find Movies From OMDB</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          doFetch(query);
        }}
      >
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {state === FetchState.Success && <MovieSearchResult movies={data} />}
      {state === FetchState.Error && <div>Something went wrong</div>}
      {state === FetchState.Loading && <div>Loading...</div>}
    </Fragment>
  );
}

export default MovieSearch;
