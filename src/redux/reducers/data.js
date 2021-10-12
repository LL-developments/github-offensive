import { GET_ISSUES, GET_ISSUES_FAIL, GET_ISSUES_SUCCESS } from 'redux/actions/types';

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
  switch (type) {
    case GET_ISSUES:
      return { ...state, loading: true };
    case GET_ISSUES_SUCCESS:
      return { ...state, issues: payload, loading: false };

    case GET_ISSUES_FAIL:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

export default dataReducer;
