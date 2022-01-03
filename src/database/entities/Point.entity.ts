import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { User } from './User.entity';

@Entity('point_record')
export class Point {
  @PrimaryGeneratedColumn('increment', { name: 'point_record_id' })
  pointRecordId: number;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User, (user) => user.userId)
  user: User;

  @Column({ name: 'start_point' })
  startPoint: Date;

  @Column({ name: 'start_lunch' })
  startLunch: Date;

  @Column({ name: 'return_lunch' })
  returnLunch: Date;

  @Column({ name: 'exit_point' })
  exitPoint: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
