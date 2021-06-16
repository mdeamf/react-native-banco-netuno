import { DO_LOGIN } from '../actions/loginActions';

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  console.log(action);
  console.log(state);
  let isLoggedIn = state.isLoggedIn;

  switch (action.type) {
    case DO_LOGIN:
      isLoggedIn = true;
      break;
  }

  return { ...state, isLoggedIn };
};
