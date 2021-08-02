import {getCustomRepository} from "typeorm"
import {UsersRepository} from "../repositories/UsersRepository"


interface IUsersCreate {
    chat: boolean;
    username: string;
}

class UsersService{

    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
    
        /**
         * checking if a user already exists
         */
        const userExists = await usersRepository.findOne({
            email
        })
        
        if(userExists){
            return userExists
        }

        const user = usersRepository.create({
            email
        });
        await usersRepository.save(user);
        
        //if the user does not exists, add into the DB
        return user;
    }
}

export {UsersService}