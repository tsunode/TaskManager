import { Router } from "express";
import { sharedMiddlewares } from "../../shared/shared.middleware";
import { tasksController } from "../controllers/tasks.controller";
import { schemas } from "../schemas/tasks.schemas";

const tasksRoute = Router();

tasksRoute.post(
    "", 
    sharedMiddlewares.validateSchema(schemas.request),
    (req, res) => tasksController.create(req, res)
);
tasksRoute.get(
    "", 
    (req, res) => tasksController.findAll(req, res)
);
tasksRoute.get(
    "/:id", 
    (req, res, next) => tasksMiddleware.ensuretasksIdExists(req, res, next),
    (req, res) => tasksController.findById(req, res)
);
tasksRoute.get(
    "/name/:name", 
    (req, res, next) => tasksMiddleware.ensuretasksNameExists(req, res, next),
    (req, res) => tasksController.findByName(req, res)
);
tasksRoute.patch(
    "/:id",
    sharedMiddlewares.validateSchema(schemas.update),
    (req, res, next) => tasksMiddleware.ensuretasksIdExists(req, res, next),
    (req, res) => tasksController.updateById(req, res)
);
tasksRoute.delete(
    "/:id", 
    (req, res, next) => tasksMiddleware.ensuretasksIdExists(req, res, next),
    (req, res) => tasksController.deleteById(req, res)
);

tasksRoute.use(sharedMiddlewares.handleError)

export { tasksRoute };