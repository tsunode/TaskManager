import { Router } from 'express';

import { usersController } from '../controllers/users.controller';
import { usersMiddleware } from '../middlewares/users.middleware';
import { schemas } from '../schemas/users.schemas';
import { sharedMiddlewares } from '../../shared/shared.middleware';

const usersRoute = Router();

usersRoute.post(
	'', 
	sharedMiddlewares.validateSchema(schemas.request),
	(req, res) => usersController.create(req, res)
);
usersRoute.get(
	'', 
	(req, res) => usersController.findAll(req, res)
);
usersRoute.get(
	'/:id', 
	usersMiddleware.ensureUsersIdExists,
	usersController.findById
);
usersRoute.get(
	'/name/:name', 
	(req, res, next) => usersMiddleware.ensureUsersNameExists(req, res, next),
	(req, res) => usersController.findByName(req, res)
);
usersRoute.patch(
	'/:id',
	sharedMiddlewares.validateSchema(schemas.update),
	(req, res, next) => usersMiddleware.ensureUsersIdExists(req, res, next),
	(req, res) => usersController.updateById(req, res)
);
usersRoute.delete(
	'/:id', 
	(req, res, next) => usersMiddleware.ensureUsersIdExists(req, res, next),
	(req, res) => usersController.deleteById(req, res)
);

usersRoute.use(sharedMiddlewares.handleError);

export { usersRoute };