import { Request, Response } from "express";
import { TasksService, tasksService } from "../services/tasks.service";

class TasksContoller {
    constructor(private tasksService: TasksService) {}

    async create(req: Request, res: Response): Promise<Response> {
        const taskData = req.body
        const task = await this.tasksService.create(taskData);

        return res.status(201).json(task);
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        const tasks = await this.tasksService.findAll();

        return res.json(tasks);
    }

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const task = await this.tasksService.findById(id)

        return res.json(task);
    }

    async findByName(req: Request, res: Response): Promise<Response> {
        const { name } = req.params
        const task = await this.tasksService.findByName(name)

        return res.json(task);
    }

    async updateById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const taskData = req.body
        const task = await this.tasksService.updateById(id, taskData);

        return res.json(task)
    }

    async deleteById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        await this.tasksService.deleteById(id);

        return res.sendStatus(204);
    }

}

const tasksController = new TasksContoller(tasksService);
export { tasksController };