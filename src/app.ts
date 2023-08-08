import express, { json } from 'express';
import "reflect-metadata"
import "express-async-errors"
import { usersRoute } from './users/routes/users.routes';

const app = express()
app.use(json())

app.use("/users", usersRoute);

export default app