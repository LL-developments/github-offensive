export const welcomeMessage = () => {
  const hour = new Date().getHours();
  const message = {
    morning: 'Bom dia',
    afternoon: 'Boa tarde',
    evening: 'Boa noite',
    default: 'Olá',
  };

  if (hour >= 6 && hour <= 12) return message.morning;
  if (hour >= 12 && hour <= 18) return message.afternoon;
  if (hour >= 6 && hour <= 23) return message.evening;
  return message.default;
};

export const getUrlIssueInfo = (data) => data.items.map((issue) => {
  const splitedUrl = issue.events_url.split('/');
  const userRepo = splitedUrl[4];
  const id = splitedUrl[7];
  const name = splitedUrl[5];
  return { id, name, userRepo };
});
