export default class AuthService {
  setLoggedUser(userLogged: any) {
    if (userLogged != null) {
      const parsedData = JSON.stringify(userLogged.data);
      localStorage.setItem("user", parsedData);
    }
  }

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
