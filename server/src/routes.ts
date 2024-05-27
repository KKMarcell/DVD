import express  from "express";
import { PartnerController } from "./controller/partner.Controller";

export function getRoutes() {
    const router = express.Router();

    const partnersController = new PartnerController();

    router.get('/new-partner', partnersController.getAll);
    router.get('/new-partner/:id', partnersController.getOne);
    router.post('/new-partner/', partnersController.create);
    router.put('/new-partner/', partnersController.update);
    router.delete('/new-partner/:id', partnersController.delete);


    return router;
}