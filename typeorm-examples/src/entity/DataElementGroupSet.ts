import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import DataElementGroup from "./DataElementGroup";

@Entity()
class DataElementGroupSet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => DataElementGroup, deg => deg.groupSet)
  groups: DataElementGroup[];
}

export default DataElementGroupSet;
