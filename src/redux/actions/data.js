import { fetch } from 'services';
import { getUrlIssueInfo } from 'utils';
import { GET_ISSUES, GET_ISSUES_FAIL, GET_ISSUES_SUCCESS } from './types';

const gettingIssues = () => ({
  type: GET_ISSUES,
});

const issuesFail = () => ({
  type: GET_ISSUES_FAIL,
});

const issuesSuccess = (payload) => ({
  type: GET_ISSUES_SUCCESS,
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

const getData = ({ token, user }) => async (dispatch) => {
  dispatch(gettingIssues());
  try {
    const issues = await getDataIssues({ token, user });
    await dispatch(issuesSuccess(issues));
  } catch (error) {
    dispatch(issuesFail());
  }
};

export default getData;
