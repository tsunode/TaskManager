import { Router } from "express";
import { usersController } from "../controllers/users.controller";
import { usersMiddleware } from "../middlewares/users.middleware";

const usersRoute = Router();

usersRoute.post(
    "", 
    (req, res) => usersController.create(req, res)
);
usersRoute.get(
    "", 
    (req, res) => usersController.findAll(req, res)
);
usersRoute.get(
    "/:id", 
    (req, res, next) => usersMiddleware.ensureUsersIdExists(req, res, next),
    (req, res) => usersController.findById(req, res)
);
usersRoute.get(
    "/name/:name", 
    (req, res, next) => usersMiddleware.ensureUsersNameExists(req, res, next),
    (req, res) => usersController.findByName(req, res)
);
usersRoute.patch(
    "/:id", 
    (req, res, next) => usersMiddleware.ensureUsersIdExists(req, res, next),
    (req, res) => usersController.updateById(req, res)
);
usersRoute.delete(
    "/:id", 
    (req, res, next) => usersMiddleware.ensureUsersIdExists(req, res, next),
    (req, res) => usersController.deleteById(req, res)
);

export { usersRoute };