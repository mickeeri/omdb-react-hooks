import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MovieSearch from './containers/MovieSearch';
import { Main } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Main>
        <MovieSearch />
      </Main>
    </>
  );
};

export default App;
