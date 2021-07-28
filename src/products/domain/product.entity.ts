import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  price: number;

  constructor(props: Partial<Product>) {
    Object.assign(this, props);
  }
}
