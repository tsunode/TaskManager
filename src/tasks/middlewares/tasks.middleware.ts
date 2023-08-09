import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";
import { Task } from "../../database/entities/tasks.entity";

class TasksMiddleware {
    private repository: Repository<Task> = AppDataSource.getRepository(Task);

    async ensureTasksIdExists(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        const task: Task | null = await this.repository.findOneBy({
            id: id
        });

        if (!task) return res.status(404).json({"message": "Task not Found!"})

        return next();
    }

    async ensureTasksNameExists(req: Request, res: Response, next: NextFunction) {
        const { name } = req.params
        const task: Task | null = await this.repository.findOneBy({
            name: name
        });

        if (!task) return res.status(404).json({"message": "Task not Found!"})

        return next();
    }
}

const tasksMiddleware = new TasksMiddleware();
export { tasksMiddleware };