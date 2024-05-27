import "reflect-metadata"
import { DataSource } from "typeorm"
import { Partner } from "./entity/Partner"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    // password: "root",
    database: "DVD",
    synchronize: true,
    logging: true,
    entities: [ Partner ],
    migrations: [],
    subscribers: [],
})
