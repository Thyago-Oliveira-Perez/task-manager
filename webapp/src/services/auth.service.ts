export default class AuthService {
  getUser() {
    const user = localStorage.getItem("user");

    if (user != null) {
      return JSON.parse(user);
    }

    return user;
  }

  logoutUser() {
    localStorage.removeItem("user");
  }
}

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");

  if (user !== null || user !== undefined) {
    return true;
  }

  return false;
};

export const saveToken = (token: any) => {
  localStorage.setItem("user", JSON.stringify(token));
};
