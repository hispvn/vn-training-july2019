import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User3 {
  constructor(username: string, isActive: boolean) {
    this.username = username;
    this.isActive = isActive;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  isActive: boolean;
}
