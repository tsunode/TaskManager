import { Task } from "../../database/entities/tasks.entity";
import { TTaskRequest, TTaskUpdate } from "../interfaces/tasks.interfaces";

abstract class TasksRepositorie {
    abstract create(taskData: TTaskRequest): Promise<Task>;
    abstract findAll(): Promise<Task[]>;
    abstract findById(taskId: string): Promise<Task | null>;
    abstract findByName(taskName: string): Promise<Task>;
    abstract updateById(taskId: string, taskData: TTaskUpdate): Promise<Task>;
    abstract deleteById(taskId: string): Promise<void>;    
}

export { TasksRepositorie }