import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import DataElementGroup from "./DataElementGroup";

@Entity()
class DataElement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToMany(() => DataElementGroup, deg => deg.dataElements)
  @JoinTable()
  groups: DataElementGroup[];
}

export default DataElement;
