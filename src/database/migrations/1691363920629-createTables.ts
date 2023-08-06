import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1691363920629 implements MigrationInterface {
    name = 'CreateTables1691363920629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permissions" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "perfil" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "expiration_date" date NOT NULL, "expiration_hour" date NOT NULL, "taskId" character varying, CONSTRAINT "REL_514623383bc4d768101bcf6946" UNIQUE ("taskId"), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_permissions" ("user_id" character varying NOT NULL, "permission_id" character varying NOT NULL, CONSTRAINT "PK_7f3736984cd8546a1e418005561" PRIMARY KEY ("user_id", "permission_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4de7d0b175f702be3be5527002" ON "users_permissions" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_b09b9a210c60f41ec7b453758e" ON "users_permissions" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "expiration_date"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "expiration_hour"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "REL_514623383bc4d768101bcf6946"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "taskId"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "expiration_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "expiration_hour" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "taskId" character varying`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "UQ_514623383bc4d768101bcf69462" UNIQUE ("taskId")`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "description" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_514623383bc4d768101bcf69462" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_4de7d0b175f702be3be55270023" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9"`);
        await queryRunner.query(`ALTER TABLE "users_permissions" DROP CONSTRAINT "FK_4de7d0b175f702be3be55270023"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_514623383bc4d768101bcf69462"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "UQ_514623383bc4d768101bcf69462"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "taskId"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "expiration_hour"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "expiration_date"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "taskId" character varying`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "REL_514623383bc4d768101bcf6946" UNIQUE ("taskId")`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "expiration_hour" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "expiration_date" date NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b09b9a210c60f41ec7b453758e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4de7d0b175f702be3be5527002"`);
        await queryRunner.query(`DROP TABLE "users_permissions"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
    }

}
