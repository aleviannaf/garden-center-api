import { MigrationInterface, QueryRunner } from "typeorm";

export class FixMigration1703254718085 implements MigrationInterface {
    name = 'FixMigration1703254718085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "old_price" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "old_price"`);
    }

}
