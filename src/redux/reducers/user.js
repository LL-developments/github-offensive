import {
  AUTH_TOKEN, SHOW_CHAT, USER_NAME,
  GET_USER, GET_USER_FAIL, GET_USER_SUCCESS,
} from 'redux/actions/types';

const initialState = {
  isAuthValid: false,
  token: null,
  user: null,
  showChat: false,
  info: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  const cases = {

    [AUTH_TOKEN]: { ...state, token: payload, isAuthValid: true },
    [SHOW_CHAT]: { ...state, showChat: payload },
    [USER_NAME]: { ...state, user: payload },

    [GET_USER]: { ...state, loading: true },
    [GET_USER_SUCCESS]: { ...state, info: payload, loading: false },
    [GET_USER_FAIL]: { ...state, error: true, loading: false },
  };

  return cases[type] || state;
};

export default userReducer;
