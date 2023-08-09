import { z } from "zod";

const task = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    created_at: z.date()
});

const request = task.omit({ id: true, created_at: true });

const update = request.partial();

const schemas = { task, request, update };

export { schemas };