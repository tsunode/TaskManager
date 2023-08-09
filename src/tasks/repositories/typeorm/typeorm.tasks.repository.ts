import { Task } from "../../../database/entities/tasks.entity";
import { TTaskRequest, TTaskUpdate } from "../../interfaces/tasks.interfaces";
import { TasksRepositorie } from "../tasks.repository";

class TypeOrmTasksRepositories implements TasksRepositorie {
    create(taskData: TTaskRequest): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Task[]> {
        throw new Error("Method not implemented.");
    }
    findById(taskId: string): Promise<Task | null> {
        throw new Error("Method not implemented.");
    }
    findByName(taskName: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    updateById(taskId: string, taskData: TTaskUpdate): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    deleteById(taskId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

const tasksRepositorie = new TypeOrmTasksRepositories()
export { tasksRepositorie }