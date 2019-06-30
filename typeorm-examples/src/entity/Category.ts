import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, BaseEntity } from "typeorm";

@Entity()
export default class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(type => Category, category => category.children)
  parent: Category;

  @OneToMany(type => Category, category => category.parent)
  children: Category[];
}
