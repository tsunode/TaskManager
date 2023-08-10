import { z } from "zod";
import { DeepPartial } from "typeorm";

import { schemas } from "../schemas/roles.schemas";

type TRole = z.infer<typeof schemas.role>;

type TRoleRequest = z.infer<typeof schemas.request>;

type TRoleUpdate = DeepPartial<TRoleRequest>;

export {
    TRole,
    TRoleRequest,
    TRoleUpdate
};