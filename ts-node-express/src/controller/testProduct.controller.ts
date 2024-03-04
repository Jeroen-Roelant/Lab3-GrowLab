import { Request, Response } from 'express';
import { testProduct } from '../model/testProduct';

import { PoolConnection } from 'mysql2';
import { connection } from '../config/db';

// const productList: testProduct[] = [
//     {
//         id: 1,
//         name: "joske vermeulen",
//         age: 21
//     },
//     {
//         id: 2,
//         name: "blabla",
//         age: 26
//     }
// ]

// const getAll = (req: Request, res: Response) => {
//     res.status(200).send(productList);
// }

// const getAll = (req: Request, res: Response) => {
//     connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
//         console.log(connection);
//         conn.query("SELECT * FROM 'testProduct';", (err, resultSet: testProduct[]) => {
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
//         }})
//     });
// }

// const getAll2 = (req: Request, res: Response) => {
//     connection.getConnection((err: QueryError, conn: PoolConnection) => {
//         conn.query("select * from product", (err, resultSet: Product[]) => {
//             conn.release();
//             if (err) {
//                 res.status(500).send({
//                     message: 'INTERNAL SERVER ERROR',
//                     result: null
//                 });
//             } else {
//                 res.status(200).send({
//                     message: 'OK',
//                     result: resultSet
//                 });
//             }
//         })
//     });
// }

const getAll = (req: Request, res: Response) => {
    connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
        if (err) {
            console.error("[Database]: Error establishing connection:", err);
            res.status(500).send({
                message: 'INTERNAL SERVER ERROR',
                result: null
            });
            return;
        }
        
        conn.query("SELECT * FROM tblTestProduct;", (err, resultSet: testProduct[]) => {
            conn.release();
            if (err) {
                console.error("[Database]: Query error:", err);
                res.status(500).send({
                    message: 'INTERNAL SERVER ERROR',
                    result: null
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    result: resultSet
                });
            }
        });
    });
}

export default { getAll }