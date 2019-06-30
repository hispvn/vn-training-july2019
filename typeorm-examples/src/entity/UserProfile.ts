import { Entity, BaseEntity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity()
class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default UserProfile;
