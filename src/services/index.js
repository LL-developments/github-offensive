const baseUrlGit = 'https://api.github.com';
const fetchGithub = async ({ token, user, type }) => {
  const verifyUrl = {
    issues: `search/issues?q=author:${user}&per_page=1000`,
  };
  // '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'
  try {
    const response = await fetch(
      `${baseUrlGit}/${verifyUrl[type]}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
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

export default fetchGithub;
