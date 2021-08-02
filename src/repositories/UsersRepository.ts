import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

//Imported from entities
@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export{UserRepository};