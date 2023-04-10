export const logouUser = () => {
  localStorage.removeItem("user");
};

export const getToken = (): string | null => {
  const user: string | null = localStorage.getItem("user");

  if (isAuthenticated()) {
    return JSON.parse(user as string)["access_token"];
  }

  return "";
};

export const isAuthenticated = (): boolean => {
  const user = localStorage.getItem("user");

  return user !== null;
};

export const saveToken = (token: any): void => {
  localStorage.setItem("user", JSON.stringify(token));
};
