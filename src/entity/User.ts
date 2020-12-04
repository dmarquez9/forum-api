import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

export type UserRoleType = 'admin' | 'user';

@Entity()
class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

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

	@UpdateDateColumn()
  updatedAt: Date;
}

export default User;
