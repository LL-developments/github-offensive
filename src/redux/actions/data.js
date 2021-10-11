import fetch from 'services';
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from './types';

export const gettingData = () => ({
  type: GET_DATA,
});

export const dataFail = () => ({
  type: GET_DATA_FAIL,
});

export const dataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

export const getData = ({ token, user }) => (dispatch) => {
  dispatch(gettingData());
  fetch({ token, user, type: 'issues' })
    .then((data) => dispatch(dataSuccess(data)))
    .catch(() => dispatch(dataFail()));
};
