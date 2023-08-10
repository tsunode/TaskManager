import { Router } from "express";
import { sharedMiddlewares } from "../../shared/shared.middleware";
import { tasksController } from "../controllers/tasks.controller";
import { schemas } from "../schemas/tasks.schemas";
import { tasksMiddleware } from "../middlewares/tasks.middleware";

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
    (req, res, next) => tasksMiddleware.ensureTasksIdExists(req, res, next),
    (req, res) => tasksController.findById(req, res)
);
tasksRoute.get(
    "/name/:name", 
    (req, res, next) => tasksMiddleware.ensureTasksNameExists(req, res, next),
    (req, res) => tasksController.findByName(req, res)
);
tasksRoute.patch(
    "/:id",
    sharedMiddlewares.validateSchema(schemas.update),
    (req, res, next) => tasksMiddleware.ensureTasksIdExists(req, res, next),
    (req, res) => tasksController.updateById(req, res)
);
tasksRoute.delete(
    "/:id", 
    (req, res, next) => tasksMiddleware.ensureTasksIdExists(req, res, next),
    (req, res) => tasksController.deleteById(req, res)
);

// Tasks Deadlines
tasksRoute.post(
    "/deadline",
    (req, res) => tasksController.createDeadline(req, res)
)
tasksRoute.patch(
    "/deadline/:taskId/:deadlineId",
    (req, res) => tasksController.updateDeadlineById(req, res)
)
tasksRoute.delete(
    "/deadline/:taskId/:deadlineId",
    (req, res) => tasksController.deleteDeadlineById(req, res)
)

tasksRoute.use(sharedMiddlewares.handleError)

export { tasksRoute };