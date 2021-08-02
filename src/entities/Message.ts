import{Entity, Column, CreateDateColumn,  UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import{v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message{

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;

    //Dealing with FK. Imported user entity, declared the many to one relationship and join column to user id
    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        //check if ID field is empty. If empty generates a new uuid value
        if(!this.id){
            this.id = uuid();
        }
    }

}
export {Message}