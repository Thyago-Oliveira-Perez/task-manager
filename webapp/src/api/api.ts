import axios, { AxiosInstance } from "axios";
import { getToken, isAuthenticated } from "../services/auth.service";
import LoginResponse from "../pages/login/types";
import RegisterResponse from "../pages/register/types";

export default class Api {
  private url = "http://localhost:3000";

  authorization = `Bearer ${isAuthenticated() !== null ? getToken() : ""}`;

  axiosClient: AxiosInstance = axios.create({
    baseURL: this.url,
    headers: { "Content-type": "application/json" },
  });

  public async login(login: any): Promise<LoginResponse> {
    return await this.axiosClient.post(`${this.url}/auth`, login);
  }

  public async register(register: any): Promise<RegisterResponse> {
    return await this.axiosClient.post(`${this.url}/register`, register);
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

  public async editTask(taskId: any, task: any) {
    this.axiosClient.put(`${this.url}/task/${taskId}`, task);
  }

  public async deleteTaskById(taskId: any) {
    return await this.axiosClient.delete(`${this.url}/task/${taskId}`);
  }
}
