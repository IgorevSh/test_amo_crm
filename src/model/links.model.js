import api from './api.js';

class LinkModel {
    async create(leadId, contactId) {
        return await api.request('POST', `/api/v4/leads/${leadId}/link`, [
            {
                to_entity_id: contactId,
                to_entity_type: "contacts",
            }
        ]);
    }

    async remove(leadId, contactId) {
        return  await api.request('POST', `/api/v4/leads/${leadId}/unlink`, [
            {
                to_entity_id: contactId,
                to_entity_type: "contacts",
            }
        ]);
    }
}

export default new LinkModel();