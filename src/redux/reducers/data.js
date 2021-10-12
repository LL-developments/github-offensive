import {
  GET_ISSUES, GET_ISSUES_FAIL, GET_ISSUES_SUCCESS,
} from 'redux/actions/types';

const initialState = {
  contributions: 0,
  issues: {
    total_count: 0,
    incomplete_results: false,
    items: [],
  },
  commits: 0,
  streak: 0,
  loading: false,
};

const dataReducer = (state = initialState, { type, payload }) => {
  const cases = {
    [GET_ISSUES]: { ...state, loading: true },
    [GET_ISSUES_SUCCESS]: { ...state, issues: payload, loading: false },
    [GET_ISSUES_FAIL]: { ...state, error: true, loading: false },
  };

  return cases[type] || state;
};

export default dataReducer;
