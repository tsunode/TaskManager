import { Router } from "express";
import { usersController } from "../controllers/users.controller";

const usersRoute = Router();

usersRoute.post("", (req, res) => usersController.create(req, res));

export { usersRoute };