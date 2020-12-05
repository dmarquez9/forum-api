import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne
} from 'typeorm';

import { User, Post } from '@entity';

@Entity()
export class Comment {
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column()
	content: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User, (user) => user.id)
	user: User;

	@ManyToOne(() => Post, (post) => post.id)
  post: Post;
}
