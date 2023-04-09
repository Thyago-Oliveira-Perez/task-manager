import axios, { AxiosInstance } from "axios";
import { LoginResponse } from "../login/types";
import AuthService from "../services/auth.service";

export default class Api {
  private url = "http://localhost:3000";

  authService = new AuthService();

  authorization = `Bearer ${
    this.authService.getUser() !== null
      ? this.authService.getUser()["acess_token"]
      : ""
  }`;

  axiosClient: AxiosInstance = axios.create({
    baseURL: this.url,
    headers: { "Content-type": "application/json" },
  });

  public async login(login: any): Promise<LoginResponse> {
    return await this.axiosClient.post(`${this.url}/auth`, login);
  }

  public async getTaskById(taskId: any) {
    return await this.axiosClient.get(`${this.url}/task/${taskId}`);
  }

  public async getAllTasksByUserId() {
    return await this.axiosClient.get(`${this.url}/task`, {
      headers: {
        Authorization: this.authorization,
      },
    });
  }

  public async deleteTaskById(taskId: any) {
    return await this.axiosClient.delete(`${this.url}/task/${taskId}`);
  }
}
