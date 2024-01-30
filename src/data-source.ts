import {DataSource} from "typeorm";
import "reflect-metadata"
import {MyRoom} from "./entity/MyRoom";
import {RoomData} from "./entity/RoomData";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "thanhch",
    password: "123456",
    database: "myroom",
    synchronize: true,
    logging: true,
    entities: ["src/entity/*.ts"],
    subscribers: [],
    migrations: [],
})