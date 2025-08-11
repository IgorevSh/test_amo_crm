import express from "express";
const router = express.Router();
import leadsController from "../controller/leads.controller.js";
import contactsController from "../controller/contacts.controller.js";
import linksController from "../controller/links.controller.js";
router.get("/", (req, res, next) => {
  res.send("OK");
});
router.post("/leads", leadsController.createLead);
router.put("/leads/:id", leadsController.updateLead);
router.get("/leads/:id", leadsController.getLead);
router.post("/contacts", contactsController.createContact);
router.put("/contacts/:id", contactsController.updateContact);
router.get("/contacts/:id", contactsController.getContact);
router.put("/link", linksController.linkContactToLead);
router.get("/unlink", linksController.unlinkContactFromLead);
export default router;
