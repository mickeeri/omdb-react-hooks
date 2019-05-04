type Action<P, T> = {
  payload?: P;
  type: T;
};

export default Action;
