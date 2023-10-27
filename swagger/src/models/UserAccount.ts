import { Column, Entity, OneToMany,PrimaryGeneratedColumn} from "typeorm";
import { Post } from "./Post";

@Entity('UserAccount')
class UserAccount {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @OneToMany(() => Post, post => post.id)
    post: number[];
    
}
export default UserAccount