import  LinksService from '../service/links.service.js';

class LinksController {
    constructor(linksService) {
        this.linksService = linksService;
    }

     linkContactToLead = async (req, res, next)=>  {
        try {
            const { lead_id, contact_id } = req.body;
            const result = await this.linksService.linkContactToLead(lead_id, contact_id);
            res.status(201).send(result);
        } catch (error) {
            next(error);
        }
    }

     unlinkContactFromLead = async(req, res, next)=> {
        try {
            const { lead_id, contact_id } = req.body;
            const result = await this.linksService.unlinkContactFromLead(lead_id, contact_id);
            res.send(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new LinksController(LinksService);