import{ Request, Response} from "express";
import{getCustomRepository} from "typeorm";
import{UsersRepository} from "../repositories/UsersRepository";
import {UsersService} from "../Services/UsersService";

class UsersController{
    async create(request: Request, response: Response):Promise<Response>{
        const {email} = request.body;

        const usersService = new UsersService();
        const user = await usersService.create(email)
        
        return response.json(user);
    }
}
export {UsersController}