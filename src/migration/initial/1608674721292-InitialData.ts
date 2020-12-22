import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialData1608674721292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        insert into public."user" (first_name, last_name)
        values
            ('jaka', 'tingkir'),
            ('tengku', 'umar');

        insert into public."ride" (from_city_name, to_city_name, user_id)
        values
            ('Bandung', 'Jakarta', 2);
    `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
