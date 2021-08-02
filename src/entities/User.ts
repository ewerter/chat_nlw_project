import{Entity, Column, CreateDateColumn,  UpdateDateColumn, PrimaryColumn} from "typeorm";
import{v4 as uuid } from "uuid";


@Entity("users")
class User{

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;


    @CreateDateColumn()
    created_at: Date;

    constructor(){
        //check if ID field is empty. If empty generates a new uuid value
        if(!this.id){
            this.id = uuid();
        }
    }

}
export {User}