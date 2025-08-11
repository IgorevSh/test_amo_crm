import LeadsService from '../service/leads.service.js'

class LeadsController {
    constructor(leadsService) {
        this.leadsService = leadsService;
    }

     createLead = async(req, res, next)=> {
        try {
            const lead = await this.leadsService.createLead(req.body);
            res.status(201).send(lead);
        } catch (error) {
            next(error);
        }
    }

     getLead = async(req, res, next)=> {
        try {
            const lead = await this.leadsService.getLead(req.params.id);
            res.send(lead);
        } catch (error) {
            next(error);
        }
    }

     updateLead = async(req, res, next) => {
        try {
            const lead = await this.leadsService.updateLead(req.params.id, req.body);
            res.send(lead);
        } catch (error) {
            next(error);
        }
    }
}

export default new LeadsController(LeadsService);