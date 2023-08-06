import express, { json } from 'express';
import "reflect-metadata"
import "express-async-errors"

const app = express()
app.use(json())

export default app