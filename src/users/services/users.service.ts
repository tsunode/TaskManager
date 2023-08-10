import { inject, injectable } from 'tsyringe';
import { TUserRequest, TUserResponse, TUserUpdate } from '../interfaces/users.interfaces';
import { usersRepositorie } from '../repositories/typeorm/typeorm.users.repository';
import { UsersRepositorie } from '../repositories/users.repository';
import { schemas } from '../schemas/users.schemas';

@injectable()
class UsersService {
	constructor(
		@inject('UsersRepositories')
		private usersRepository: UsersRepositorie
	) {}

	async create(userData: TUserRequest): Promise<TUserResponse> {
		const user = await this.usersRepository.create(userData);
		console.log(user)

		return schemas.response.parse(user);
	}

	async findAll(): Promise<TUserResponse[]> {
		const users = await this.usersRepository.findAll();

		return users.map(user => schemas.response.parse(user));
	}

	async findById(userId: string): Promise<TUserResponse> {
		const user = await this.usersRepository.findById(userId);

		return schemas.response.parse(user);
	}

	async findByName(userName: string): Promise<TUserResponse> {
		const user = await this.usersRepository.findByName(userName);

		return schemas.response.parse(user);
	}

	async updateById(userId: string, userData: TUserUpdate): Promise<TUserResponse> {
		const user = await this.usersRepository.updateById(userId, userData);

		return schemas.response.parse(user);
	}

	async deleteById(userId: string): Promise<void> {
		await this.usersRepository.deleteById(userId);
	}

}

export { UsersService };