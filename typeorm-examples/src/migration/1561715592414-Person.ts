import { MigrationInterface, QueryRunner } from "typeorm";

export class Person1561715592414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.query(
      `CREATE TABLE "person"
      (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "uuid" varchar NOT NULL,
        "createdAt" datetime NOT NULL DEFAULT (datetime('now')),
        "updatedAt" datetime NOT NULL DEFAULT (datetime('now')),
        "name" varchar(100) NOT NULL,
        "email" varchar(100) NOT NULL,
        "tags" text NOT NULL,
        "profile" text NOT NULL
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.query(`DROP TABLE "person"`);
  }
}
