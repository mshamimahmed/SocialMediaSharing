import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";
@Entity()
export class SocialMedia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    facebookId: number;

    @Column({nullable: true})
    facebookAccessToken: string;

    @Column({nullable: true})
    message: string;

    
    
    @Column('boolean', { nullable: true, default: true })
    isFacebookShare;

    @Column('boolean', { nullable: true, default: true })
    isInstagramShare;

    @Column('boolean', { nullable: true, default: true })
    isTwitterShare;

    @Column('boolean', { nullable: true, default: true })
    isLinkedInShare;
   
}