import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MovieSearch from './containers/MovieSearch';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <MovieSearch />
    </>
  );
};

export default App;
