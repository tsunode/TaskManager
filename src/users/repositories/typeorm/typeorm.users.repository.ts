import { create } from "domain";
import { UsersRepositorie } from "../users.repository";
import { TUserRequest, TUserUpdate } from "../../interfaces/users.interfaces";
import { User } from "../../../database/entities/users.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";

class TypeOrmUsersRepositories implements UsersRepositorie {
    private repository: Repository<User> = AppDataSource.getRepository(User);

    async create(userData: TUserRequest): Promise<User> {
        return await this.repository.create(userData)
    }
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findById(userId: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findByName(userName: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    updateById(userId: string, userData: TUserUpdate): Promise<User> {
        throw new Error("Method not implemented.");
    }
    deleteById(userId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

const usersRepositorie = new TypeOrmUsersRepositories();
export { usersRepositorie };