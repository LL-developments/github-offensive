import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from 'redux/actions/types';

const initialState = {
  contributions: 0,
  issues: 0,
  commits: 0,
  streak: 0,
  loading: false,
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...state, loading: true };
    case GET_DATA_SUCCESS:
      return { ...state, issues: payload, loading: false };

    case GET_DATA_FAIL:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export default dataReducer;
