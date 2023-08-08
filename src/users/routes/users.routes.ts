import { Router } from "express";
import { usersController } from "../controllers/users.controller";

const usersRoute = Router();

usersRoute.post("", (req, res) => usersController.create(req, res));
usersRoute.get("", (req, res) => usersController.findAll(req, res));
usersRoute.get("/:id", (req, res) => usersController.findById(req, res));
usersRoute.get("/name/:name", (req, res) => usersController.findByName(req, res));

export { usersRoute };