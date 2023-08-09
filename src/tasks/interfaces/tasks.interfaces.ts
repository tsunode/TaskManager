import { z } from "zod";
import { schemas } from "../schemas/tasks.schemas";
import { DeepPartial } from "typeorm";

type TTask = z.infer<typeof schemas.task>;

type TTaskRequest = z.infer<typeof schemas.request>;

type TTaskUpdate = DeepPartial<TTaskRequest>;

export {
    TTask,
    TTaskRequest,
    TTaskUpdate
};