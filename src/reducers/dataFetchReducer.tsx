export enum FetchState {
  Error,
  Loading,
  Success,
  Pending,
}

type State = {
  state: FetchState;
  data: any;
};

type Action = {
  payload?: any;
  type: 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILURE';
};

const dataFetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, state: FetchState.Loading };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        state: FetchState.Success,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return { ...state, state: FetchState.Error };
    default:
      throw new Error();
  }
};

export default dataFetchReducer;
