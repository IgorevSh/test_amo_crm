import api from "./api.js";

class LeadModel {
  async create(leadData) {
    return await api.request("POST", "/api/v4/leads", [leadData]);
  }

  async getById(id) {
    return await api.request("GET", `/api/v4/leads/${id}`);
  }

  async update(id, updateData) {
    return await api.request("PATCH", `/api/v4/leads/${id}`, updateData);
  }

  async findByName(name) {
    const response = await api.request("GET", `/api/v4/leads?query=${name}`);
    return response?.leads[0];
  }
}

export default new LeadModel();
