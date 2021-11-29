import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

export class AchievementEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Column({ type: 'text', length: 120, nullable: true })
  title: string;

  @Column({ type: 'text', length: 500, nullable: true })
  description: string | null;

  @Column({ type: 'text', length: 80 })
  createdBy: string;

  // @Column({ type: 'boolean', default: true })
  // isActive: boolean;
}
