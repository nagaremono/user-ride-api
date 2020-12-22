import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Ride } from './Ride';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 50 })
  last_name: string;

  @OneToMany(() => Ride, (ride) => ride.user_id)
  rides: Ride[];
}
