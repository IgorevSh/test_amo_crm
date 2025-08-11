import LinkModel from '../model/links.model.js';
import LeadModel from'../model/leads.model.js';
import ContactModel from '../model/contacts.model.js';

class LinksService {
    constructor(linkModel, leadModel, contactModel) {
        this.linkModel = linkModel;
        this.leadModel = leadModel;
        this.contactModel = contactModel;
    }

    async linkContactToLead(leadId, contactId) {
        const leadAnswer = await this.leadModel.getById(leadId);
        const contactAnswer = await this.contactModel.getById(contactId);
        if (leadAnswer&&contactAnswer) {
            return this.linkModel.create(leadId, contactId);
        }else {
            throw new Error( "Отсутствюут указанные сделка или контакт")
        }
    }

    async unlinkContactFromLead(leadId, contactId) {
        const leadAnswer =  await this.leadModel.getById(leadId);
        const contactAnswer = await this.contactModel.getById(contactId);
        if (leadAnswer&&contactAnswer) {
            return this.linkModel.remove(leadId, contactId);
        }else {
            throw new Error("Отсутствюут указанные сделка или контакт")
        }
    }
}

export default new LinksService(LinkModel, LeadModel, ContactModel);