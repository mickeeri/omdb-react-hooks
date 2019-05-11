import React, { Fragment, useState } from 'react';
import useOmdbApi from '../hooks/useDataApi';
import MovieSearchResult from '../components/MovieSearchResult';
import { FetchState } from '../models/FetchState';
import { Input, Flex, SearchButton, Header } from '../styles';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const { data, state, doFetch } = useOmdbApi();

  return (
    <Fragment>
      <Header>OMDb API</Header>

      <form
        onSubmit={e => {
          e.preventDefault();
          doFetch(query);
        }}
      >
        <Flex>
          <Input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Find movies from the Open Movie Database"
          />

          <SearchButton type="submit">Search</SearchButton>
        </Flex>
      </form>
      {state === FetchState.Success && <MovieSearchResult movies={data} />}
      {state === FetchState.Error && <div>Something went wrong</div>}
      {state === FetchState.Loading && <div>Loading...</div>}
    </Fragment>
  );
}

export default MovieSearch;
