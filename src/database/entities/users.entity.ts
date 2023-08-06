import { BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";

import { BaseEntity } from "./base.entity";
import { Permission } from "./permissions.entity";
import { Task } from "./tasks.entity";

@Entity("users")
export class User extends BaseEntity {
    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255 })
    email: string

    @Column({ type: "varchar", length: 255 })
    password: string

    @Column({ type: "text"})
    perfil: string

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "users_permissions",
        joinColumns: [{ name: "user_id" }],
        inverseJoinColumns: [{ name: "permission_id" }],
    })
    permissions: Permission[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      const isHashed = getRounds(this.password);
  
      if (!isHashed) this.password = hashSync(this.password, 10);
    }
}