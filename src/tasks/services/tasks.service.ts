import { Task } from "../../database/entities/tasks.entity";
import { TTaskRequest, TTaskUpdate } from "../interfaces/tasks.interfaces";
import { TasksRepositorie } from "../repositories/tasks.repository";
import { tasksRepositorie } from "../repositories/typeorm/typeorm.tasks.repository";

class TasksService {
    constructor(private tasksRepositorie: TasksRepositorie) {}

    async create(taskData: TTaskRequest): Promise<Task> {
        return await this.tasksRepositorie.create(taskData);
    }

    async findAll(): Promise<Task[]> {
        return await this.tasksRepositorie.findAll();
    }

    async findById(taskId: string): Promise<Task> {
        const task: Task | null = await this.tasksRepositorie.findById(taskId);

        return task!
    }

    async findByName(taskName: string): Promise<Task> {
        return await this.tasksRepositorie.findByName(taskName);
    }

    async updateById(taskId: string, taskData: TTaskUpdate): Promise<Task> {
        return await this.tasksRepositorie.updateById(taskId, taskData);
    }

    async deleteById(taskId: string): Promise<void> {
        await this.tasksRepositorie.deleteById(taskId);
    }
}

const tasksService = new TasksService(tasksRepositorie);
export { tasksService, TasksService };