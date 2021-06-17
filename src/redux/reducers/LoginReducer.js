import { DO_LOGIN } from '../actions/LoginActions';

const initialState = {
  isLoggedIn: false,
  username: '',
};

export default (state = initialState, action) => {
  let isLoggedIn = state.isLoggedIn;
  let username = state.username;

  switch (action.type) {
    case DO_LOGIN:
      isLoggedIn = true;
      username = action.username;
      break;
  }

  return { ...state, isLoggedIn, username };
};
