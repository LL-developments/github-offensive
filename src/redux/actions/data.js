import { fetch } from 'services';
import { getUrlIssueInfo } from 'utils';
import {
  GET_ISSUES, GET_ISSUES_FAIL, GET_ISSUES_SUCCESS,
  GET_USER, GET_USER_FAIL, GET_USER_SUCCESS,
} from './types';

const fetchingData = (type) => ({
  type,
});

const fetchFail = (type) => ({
  type,
});

const fetchSuccess = (type, payload) => ({
  type,
  payload,
});

const getDataIssues = async ({ token, user }) => {
  try {
    const issues = await fetch({ token, user, type: 'issues' });
    const eventsUrls = getUrlIssueInfo(issues);
    const issuesEvents = await Promise.all(eventsUrls
      .map(async ({ id, name, userRepo }) => {
        const dataEvents = await fetch({
          token, user: userRepo, type: 'issuesEvents', repo: { id, name },
        });
        return dataEvents;
      }));

    const issuesWithEvents = issues.items.map((issue, index) => ({
      ...issue, events: [...issuesEvents[index]],
    }));

    return {
      total_count: issues.total_count,
      incomplete_results: issues.incomplete_results,
      items: issuesWithEvents,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const getDataUser = async ({ token, user }) => {
  try {
    const userInfo = await fetch({ token, user, type: 'userInfo' });
    return userInfo;
  } catch (error) {
    throw new Error(error);
  }
};

const getData = ({ token, user }) => async (dispatch) => {
  dispatch(fetchingData(GET_ISSUES));
  dispatch(fetchingData(GET_USER));
  try {
    const issues = await getDataIssues({ token, user });
    const userInfo = await getDataUser({ token, user });
    await dispatch(fetchSuccess(GET_ISSUES_SUCCESS, issues));
    await dispatch(fetchSuccess(GET_USER_SUCCESS, userInfo));
  } catch (error) {
    dispatch(fetchFail(GET_ISSUES_FAIL));
    dispatch(fetchFail(GET_USER_FAIL));
  }
};

export default getData;
