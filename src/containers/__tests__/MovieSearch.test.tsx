import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library';
import 'jest-dom/extend-expect';
import axios from 'axios';

import MovieSearch from '../MovieSearch';
import SearchResult from '../../models/SearchResult';
import { getOMDBUrl } from '../../utils';

jest.mock('axios', () => ({ get: jest.fn() }));
const axiosMock = axios.get as jest.Mock;

beforeEach(() => {
  const data: SearchResult = {
    Search: [
      {
        Title: 'The Godfather',
        Poster: '',
        Type: 'movie',
        Year: '1997',
        imdbID: '98jaja82',
      },
    ],
    Response: 'OK',
    totalResults: 1,
  };

  axiosMock.mockResolvedValueOnce({
    data,
  });
});

afterEach(cleanup);

test('loads and displays movies', async () => {
  const { container, getByLabelText, getByText, getByAltText } = render(
    <MovieSearch />,
  );
  const searchInput = getByLabelText('search') as HTMLInputElement;
  const searchButton = getByText('Search');

  fireEvent.change(searchInput, { target: { value: 'godfather' } });
  fireEvent.click(searchButton);

  expect(axios.get).toHaveBeenNthCalledWith(1, getOMDBUrl('godfather'));

  expect(container.textContent).toContain('Loading...');

  const movieListItem = await waitForElement(() =>
    getByAltText('The Godfather'),
  );

  expect(movieListItem).toBeTruthy();
});
