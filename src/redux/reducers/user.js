import { AUTH_TOKEN, SHOW_CHAT, USER_NAME } from 'redux/actions/types';

const initialState = {
  isAuthValid: false,
  token: null,
  user: null,
  showChat: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_TOKEN:
      return { ...state, token: payload, isAuthValid: true };
    case USER_NAME:
      return { ...state, user: payload };
    case SHOW_CHAT:
      return { ...state, showChat: payload };
    default:
      return state;
  }
};

export default userReducer;
