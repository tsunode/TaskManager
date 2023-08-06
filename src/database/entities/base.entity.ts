import { PrimaryColumn, CreateDateColumn } from "typeorm";
import { randomUUID } from "node:crypto";

export class BaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

