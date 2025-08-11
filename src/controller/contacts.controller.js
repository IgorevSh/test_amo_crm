import  ContactsService from '../service/contacts.service.js';

class ContactsController {
    contactsService;
    constructor(CS) {
        this.contactsService = CS;
    }

     createContact = async (req, res, next)=> {
        try {
            const contact = await this.contactsService.createContact(req.body);
            res.status(201).send(contact);
        } catch (error) {
            next(error);
        }
    }

     getContact = async (req, res, next)=>{
        try {
            const contact = await this.contactsService.getContact(req.params.id);
            res.send(contact);
        } catch (error) {
            next(error);
        }
    }

    updateContact = async(req, res, next)=> {
        try {
            const contact = await this.contactsService.updateContact(req.params.id, req.body);
            res.send(contact);
        } catch (error) {
            next(error);
        }
    }
}

export default new ContactsController(ContactsService);