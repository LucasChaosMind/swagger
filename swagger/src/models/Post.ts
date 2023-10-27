import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("Post")
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    body: string;
}

export default Post