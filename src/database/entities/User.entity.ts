import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

import { Point } from './Point.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment', { name: 'user_id' })
  userId: number;

  @OneToMany(() => Point, (point) => point.user)
  pointRecord: Point[];

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
