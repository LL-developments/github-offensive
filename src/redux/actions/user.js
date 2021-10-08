import { AUTH_TOKEN, USER_NAME } from './types';

export const setToken = (payload) => ({
  type: AUTH_TOKEN, payload,
});

export const setUsername = (payload) => ({
  type: USER_NAME, payload,
});
