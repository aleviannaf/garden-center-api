import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1698680246662 implements MigrationInterface {
    name = 'InitialMigration1698680246662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" DROP DEFAULT`);
    }

}
