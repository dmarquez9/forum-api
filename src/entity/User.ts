import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn
} from 'typeorm';

export type UserRoleType = 'admin' | 'user';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		unique: true
	})
	username: string;

	@Column()
	name: string;

	@Column({
		unique: true
	})
	email: string;

	@Column()
	password: string;

	@Column({
		type: 'enum',
		enum: ['admin', 'user'],
		default: 'user'
	})
	role: UserRoleType;

	@CreateDateColumn()
	createdAt: Date;
}
