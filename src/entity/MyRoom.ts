import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class MyRoom {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        name: "name", type: "text"
    })
    name: string

    @Column({
        name: "description", type: "text"
    })
    description: string

    @Column({ name: "password", type: "text", default: ""})
    password: string

    @Column({name: "auto_dispose", type: "boolean", default: "false"})
    autoDispose: boolean
}