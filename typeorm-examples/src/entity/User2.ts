import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  AfterInsert,
  AfterLoad,
} from "typeorm";

@Entity()
export default class User2 extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  isActive: boolean;

  @AfterLoad()
  afterLoad() {
    console.log("afterLoad");
  }

  @BeforeInsert()
  beforeInsert() {
    console.log("beforeInsert");
  }

  @AfterInsert()
  afterInsert() {
    console.log("afterInsert");
  }

  static findByActive(isActive: boolean) {
    return this.createQueryBuilder("user")
      .where("user.isActive = :isActive", { isActive })
      .getMany();
  }
}
