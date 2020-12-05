import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn
} from 'typeorm';

@Entity()
export class Category {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@CreateDateColumn()
	createdAt: Date;
}
