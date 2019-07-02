import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User2 extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  isActive: boolean;

  static findByActive(isActive: boolean) {
    return this.createQueryBuilder("user")
      .where("user.isActive = :isActive", { isActive })
      .getMany();
  }
}
