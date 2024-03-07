import { createPool } from 'mysql2';
import dotenv from "dotenv";
import express, {Request, Response} from 'express';

// import { MysqlError, PoolConnection } from 'mysql';

dotenv.config();

export const connection = createPool(
    {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT ?? '3306', 10),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    }
);

// const dbTest = (req: Request, res: Response) => {
//     connection.getConnection((err: MysqlError, conn: PoolConnection) => {
//         conn.query("SELECT * FROM `test` WHERE 1;", (err, resultSet: any[]) => {
//         conn.release();
//         if (err) {
//             res.status(500).send({
//                 message: 'INTERNAL SERVER ERROR',
//                 result: null
//             });
//             console.log("[Database]: INTERNAL SERVER ERROR");
//         } else {
//             res.status(200).send({
//                 message: 'OK',
//                 result: resultSet
//             });
//             console.log("[Database]: Database connection made");
//         }
//         })
//     });
// }

// export default dbTest;
