import { Repository } from "typeorm";

import { AppDataSource } from "../../../data-source";
import { Task } from "../../../database/entities/tasks.entity";
import { TTaskRequest, TTaskUpdate } from "../../interfaces/tasks.interfaces";
import { TasksRepositorie } from "../tasks.repository";

class TypeOrmTasksRepositories implements TasksRepositorie {
    private repository: Repository<Task> = AppDataSource.getRepository(Task);

    async create(taskData: TTaskRequest): Promise<Task> {
        const task: Task = this.repository.create(taskData)
        await this.repository.save(task);

        return task;
    }

    async findAll(): Promise<Task[]> {
        return await this.repository.find();
    }

    async findById(taskId: string): Promise<Task> {
        const task: Task | null = await this.repository.findOneBy({
            id: taskId
        })

        return task!
    }

    async findByName(taskName: string): Promise<Task> {
        const task: Task | null = await this.repository.findOneBy({
            name: taskName
        })
        console.log(task)
        return task!
    }

    async updateById(taskId: string, taskData: TTaskUpdate): Promise<Task> {
        const task: Task = await this.findById(taskId)
        const newtaskData = {
            ...task,
            ...taskData
        }

        const taskPatched = await this.repository.save(newtaskData);

        return taskPatched;
    }

    async deleteById(taskId: string): Promise<void> {
        await this.repository.delete({
            id: taskId
        });

        return
    }
}

const tasksRepositorie = new TypeOrmTasksRepositories()
export { tasksRepositorie }