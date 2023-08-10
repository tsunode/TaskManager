import express, { json } from 'express';
import "reflect-metadata"
import "express-async-errors"

import { usersRoute } from './users/routes/users.routes';
import { tasksRoute } from './tasks/routes/tasks.routes';
import { permissionsRoute } from './permissions/routes/permissions.routes';
import { container } from 'tsyringe';
import { TypeOrmUsersRepositories } from './users/repositories/typeorm/typeorm.users.repository';

container.register('UsersRepositories', TypeOrmUsersRepositories)

const app = express()
app.use(json())

app.use("/users", usersRoute);
app.use("/tasks", tasksRoute);
app.use("/permissions", permissionsRoute);

export default app