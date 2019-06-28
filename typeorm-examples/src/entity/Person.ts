import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Generated,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column("simple-array")
  tags: string[];

  @Column("simple-json")
  profile: { a: number; b: number; c: number };
}

export default Person;
