import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  from_city_name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  to_city_name: string;

  @ManyToOne(() => User, (user) => user.rides)
  @JoinColumn({ name: 'user_id' })
  user_id: User;
}
