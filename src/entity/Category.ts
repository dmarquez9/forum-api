import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn
} from 'typeorm';

@Entity()
export class Category {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		unique: true
	})
	title: string;

	@Column()
	description: string;

	@CreateDateColumn()
	createdAt: Date;
}
