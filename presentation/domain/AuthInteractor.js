import { read, set } from "../data/TokenStorage";

export const login = async (username, password) => {
  let token = username + password;
  return await set(token);
};

export const isLoggedIn = async () => {
  const token = await read();
  return token != null;
};
