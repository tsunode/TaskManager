import express, { json } from 'express';
import "reflect-metadata"
import "express-async-errors"

import { usersRoute } from './users/routes/users.routes';
import { tasksRoute } from './tasks/routes/tasks.routes';

const app = express()
app.use(json())

app.use("/users", usersRoute);
app.use("/tasks", tasksRoute);

export default app