import {MigrationInterface, QueryRunner} from "typeorm";

export class hi1611591668841 implements MigrationInterface {
    name = 'hi1611591668841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `course_detail` (`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `course_id` int NOT NULL, `category_id` int NOT NULL, `topic_id` int NOT NULL, `trainer_id` int NOT NULL, PRIMARY KEY (`course_id`, `category_id`, `topic_id`, `trainer_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `course_detail` ADD CONSTRAINT `FK_85f3d59bbbda6045068211c8dfe` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `course_detail` ADD CONSTRAINT `FK_8a50932de7e9cf64af8a45e76fc` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `course_detail` ADD CONSTRAINT `FK_f069f2a8559fa328d233c714db3` FOREIGN KEY (`topic_id`) REFERENCES `topic`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `course_detail` ADD CONSTRAINT `FK_f14b9b38b764b8108a952db9673` FOREIGN KEY (`trainer_id`) REFERENCES `trainer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `course_detail` DROP FOREIGN KEY `FK_f14b9b38b764b8108a952db9673`");
        await queryRunner.query("ALTER TABLE `course_detail` DROP FOREIGN KEY `FK_f069f2a8559fa328d233c714db3`");
        await queryRunner.query("ALTER TABLE `course_detail` DROP FOREIGN KEY `FK_8a50932de7e9cf64af8a45e76fc`");
        await queryRunner.query("ALTER TABLE `course_detail` DROP FOREIGN KEY `FK_85f3d59bbbda6045068211c8dfe`");
        await queryRunner.query("DROP TABLE `course_detail`");
    }

}
