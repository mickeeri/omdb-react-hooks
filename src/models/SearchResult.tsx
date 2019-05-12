import Movie from './Movie';

export default interface SearchResult {
  Response: string;
  Search: Movie[];
  totalResults: number;
}
