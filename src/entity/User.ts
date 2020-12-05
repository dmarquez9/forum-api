import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	BeforeInsert,
	BeforeUpdate
} from 'typeorm';

import * as bcrypt from 'bcrypt';

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

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		if (this.password) {
			this.password = bcrypt.hashSync(this.password, 5);
		}
	}

	comparePasswords(password) {
		return bcrypt.compareSync(password, this.password);
	}
}
