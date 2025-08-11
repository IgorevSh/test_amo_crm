import api from "./api.js";
class ContactModel {
  async create(contactData) {
    return await api.request("POST", "/api/v4/contacts", [contactData]);
  }

  async getById(id) {
    return await api.request("GET", `/api/v4/contacts/${id}`);
  }

  async update(id, updateData) {
    return await api.request("PATCH", `/api/v4/contacts/${id}`, updateData);
  }

  async findByEmail(email) {
    const response = await api.request(
      "GET",
      `/api/v4/contacts?query=${email}`,
    );
    return response.contacts[0] || null;
  }
}

export default new ContactModel();
