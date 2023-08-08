import { Request, Response } from "express";
import { UsersService, usersServices } from "../services/users.service";

class UsersContoller {
    constructor(private usersService: UsersService) {}

    async create(req: Request, res: Response): Promise<Response> {
        const userData = req.body
        const user = await this.usersService.create(userData);

        return res.status(201).json(user);
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        const users = await this.usersService.findAll();

        return res.json(users);
    }

    async findById(req: Request, res: Response): Promise<Response> {
        const { id }= req.params
        const user = await this.usersService.findById(id)

        return res.json(user);
    }

    async findByName(req: Request, res: Response): Promise<Response> {
        console.log("--------------------------------------------------------")
        const { name }= req.params
        console.log(name)
        const user = await this.usersService.findByName(name)

        return res.json(user);
    }

    async updateById(req: Request, res: Response): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    async deleteById(req: Request, res: Response): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

const usersController = new UsersContoller(usersServices);
export { usersController };