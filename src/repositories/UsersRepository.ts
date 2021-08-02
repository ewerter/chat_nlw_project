import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

//Imported from entities
@EntityRepository(User)
class UsersRepository extends Repository<User> {

}

export{UsersRepository};