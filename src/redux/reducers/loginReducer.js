import { DO_LOGIN } from '../actions/LoginActions';

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  let isLoggedIn = state.isLoggedIn;

  switch (action.type) {
    case DO_LOGIN:
      isLoggedIn = true;
      break;
  }

  return { ...state, isLoggedIn };
};
