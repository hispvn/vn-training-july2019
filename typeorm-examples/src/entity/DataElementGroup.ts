import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import DataElement from "./DataElement";
import DataElementGroupSet from "./DataElementGroupSet";

@Entity()
class DataElementGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToMany(() => DataElement, de => de.groups)
  dataElements: DataElement[];

  @ManyToOne(() => DataElementGroupSet, degs => degs.groups)
  groupSet: DataElementGroupSet;
}

export default DataElementGroup;
