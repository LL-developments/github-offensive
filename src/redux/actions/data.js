import fetch from 'services';
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from './types';

const gettingData = () => ({
  type: GET_DATA,
});

const dataFail = () => ({
  type: GET_DATA_FAIL,
});

const dataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

const getData = ({ token, user }) => (dispatch) => {
  dispatch(gettingData());
  fetch({ token, user, type: 'issues' })
    .then((data) => dispatch(dataSuccess(data)))
    .catch(() => dispatch(dataFail()));
};

export default getData;
