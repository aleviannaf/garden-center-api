import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1698777304715 implements MigrationInterface {
    name = 'InitialMigration1698777304715'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(90) NOT NULL, "description" text NOT NULL, "type" character varying(45) NOT NULL, "price" integer NOT NULL DEFAULT '0', "image_url" character varying(255) NOT NULL, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
