const baseUrlGit = 'https://api.github.com';
const fetchGithub = async ({
  token, user, type,
  repo = { id: '', name: '' },
}) => {
  const verifyUrl = {
    followers: `users/${user}/followers`,
    issues: `search/issues?q=author:${user}&per_page=1000`,
    issuesEvents: `repos/${user}/${repo.name}/issues/${repo.id}/events`,
    userInfo: `users/${user}`,
  };

  try {
    const response = await fetch(
      `${baseUrlGit}/${verifyUrl[type]}`,
      {
        method: 'GET',
        headers: {
          authorization: `token ${token}`,
        },
      },
    );
    const json = await response.json();
    const data = await json;
    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

// LINK https://dev.to/gr2m/github-api-authentication-personal-access-tokens-53kd
// LINK https://github.com/settings/tokens/new
export default fetchGithub;
