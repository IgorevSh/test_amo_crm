import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.BASE_URL,
      headers: {
        Authorization: `Bearer ${process.env.LONG_TOKEN || process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
  }

  async request(method, endpoint, data = null) {
    try {
      const res = await this.api({
        method,
        url: endpoint,
        data,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response?.data?.message || "API error");
    }
  }
}

export default new Api();
