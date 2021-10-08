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

export const saveLocalStorage = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getLocalStorage = (key) => JSON
  .parse(localStorage.getItem(key));
