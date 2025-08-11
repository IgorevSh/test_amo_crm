import ContactModel from '../model/contacts.model.js';

class ContactsService {
    constructor(contactModel) {
        this.contactModel = contactModel;
    }

    async createContact(contactData) {
        if (contactData?.email) {
            const existingContact = await this.contactModel.findByEmail(contactData.email);
            if (existingContact) {
                throw new Error('Контакт с такой почтой уже существует');
            }
        }
        return  this.contactModel.create(contactData)
    }

    async getContact(id) {
        return await this.contactModel.getById(id)||{};
    }

    async updateContact(id, updateData) {
        return await this.contactModel.update(id, updateData);
    }
}

export default new ContactsService(ContactModel);