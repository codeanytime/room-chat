import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RoomData {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "session_id", type: "text"})
    sessionId: string

    @Column({
        name: "message", type: "text"
    })
    message: string
}