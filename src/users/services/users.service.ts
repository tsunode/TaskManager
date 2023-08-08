import { TUserRequest, TUserResponse, TUserUpdate } from "../interfaces/users.interfaces";
import { usersRepositorie } from "../repositories/typeorm/typeorm.users.repository";
import { UsersRepositorie } from "../repositories/users.repository";
import schemas from "../schemas/users.schemas";

class UsersService {
    constructor(private usersRepository: UsersRepositorie) {}

    async create(userData: TUserRequest): Promise<TUserResponse> {
        const user = await this.usersRepository.create(userData);

        return schemas.response.parse(user);
    }
    findAll(): Promise<TUserResponse[]> {
        throw new Error("Method not implemented.");
    }
    findById(userId: string): Promise<TUserResponse> {
        throw new Error("Method not implemented.");
    }
    findByName(userName: string): Promise<TUserResponse> {
        throw new Error("Method not implemented.");
    }
    updateById(userId: string, userData: TUserUpdate): Promise<TUserResponse> {
        throw new Error("Method not implemented.");
    }
    deleteById(userId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

const usersServices = new UsersService(usersRepositorie);
export { usersServices, UsersService };