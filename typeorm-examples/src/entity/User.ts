import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";
import UserProfile from "./UserProfile";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToOne(() => UserProfile, userProfile => userProfile.user)
  profile: UserProfile;
}

export default User;
