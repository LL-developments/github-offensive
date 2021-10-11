import { AUTH_TOKEN, SHOW_CHAT, USER_NAME } from './types';

export const setToken = (payload) => ({
  type: AUTH_TOKEN, payload,
});

export const setUsername = (payload) => ({
  type: USER_NAME, payload,
});

export const setShowChat = (payload) => ({
  type: SHOW_CHAT, payload,
});
