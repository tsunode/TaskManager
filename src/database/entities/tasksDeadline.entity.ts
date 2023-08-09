import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { Task } from "./tasks.entity";

@Entity("tasks_deadlines")
export class TaskDeadline extends BaseEntity {
    @Column({ type: "date" })
    expiration_date: Date;

    @Column({ type: "date" })
    expiration_hour: Date;

    @OneToOne(() => Task)
    @JoinColumn()
    task: Task;
}