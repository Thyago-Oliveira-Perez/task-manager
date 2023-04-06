import axios, { AxiosInstance } from "axios";

export default class Api {
  private url = "http://localhost:3000";

  axiosClient: AxiosInstance = axios.create({
    baseURL: this.url,
    headers: { "Content-type": "application/json" },
  });

  public async login(login: {}) {
    return await this.axiosClient.post(`${this.url}/auth`, login);
  }

  public async getAllTasksByUserId() {
    return await this.axiosClient.get(`${this.url}/task`);
  }

  public async deleteTaskById(taskId: any) {
    return await this.axiosClient.delete(`${this.url}/task/${taskId}`);
  }
}
