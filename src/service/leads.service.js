import LeadModel from "../model/leads.model.js";

class LeadsService {
  constructor(leadModel) {
    this.leadModel = leadModel;
  }

  async createLead(leadData) {
    const existingLead = await this.leadModel.findByName(leadData.name);
    if (existingLead) {
      throw new Error("Сделка с таким именем уже существует");
    }
    return this.leadModel.create(leadData);
  }

  async getLead(id) {
    const result = await this.leadModel.getById(id);
    return result || {};
  }

  async updateLead(id, updateData) {
    return await this.leadModel.update(id, updateData);
  }
}

export default new LeadsService(LeadModel);
