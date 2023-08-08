import { Request, Response } from "express";
import { TUserResponse, TUserUpdate } from "../interfaces/users.interfaces";
import { UsersService, usersServices } from "../services/users.service";

class UsersContoller {
    constructor(private usersService: UsersService) {}

    async create(req: Request, res: Response): Promise<Response> {
        const userData = req.body
        const user = await this.usersService.create(userData);

        return res.status(201).json(user);
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

const usersController = new UsersContoller(usersServices);
export { usersController };