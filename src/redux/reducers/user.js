import { AUTH_TOKEN, USER_NAME } from 'redux/actions/types';

const initialState = {
  isAuthValid: false,
  token: null,
  user: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_TOKEN:
      return { ...state, token: payload, isAuthValid: true };
    case USER_NAME:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default userReducer;
