import { FetchState } from './FetchState';

type State<T> = {
  state: FetchState;
  data: T;
};

export default State;
