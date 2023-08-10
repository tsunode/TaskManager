import { Repository } from 'typeorm';
import { injectable } from 'tsyringe';

import { UsersRepositorie } from '../users.repository';
import { TUserRequest, TUserUpdate } from '../../interfaces/users.interfaces';


import { User } from '../../../database/entities/users.entity';
import { AppDataSource } from '../../../data-source';

@injectable()
class TypeOrmUsersRepositories implements UsersRepositorie {
	private repository: Repository<User> = AppDataSource.getRepository(User);

	async create(userData: TUserRequest): Promise<User> {
		const user: User = this.repository.create(userData);
		await this.repository.save(user);

		return user;
	}

	async findAll(): Promise<User[]> {
		return await this.repository.find();
	}

	async findById(userId: string): Promise<User> {
		const user: User | null = await this.repository.findOneBy({
			id: userId
		});

		return user!;
	}

	async findByName(userName: string): Promise<User> {
		const user: User | null = await this.repository.findOneBy({
			name: userName
		});
		console.log(user);
		return user!;
	}

	async updateById(userId: string, userData: TUserUpdate): Promise<User> {
		const user: User = await this.findById(userId);
		const newUserData = {
			...user,
			...userData
		};

		const userPatched = await this.repository.save(newUserData);

		return userPatched;
	}

	async deleteById(userId: string): Promise<void> {
		await this.repository.delete({
			id: userId
		});

		return;
	}

}

export { TypeOrmUsersRepositories };