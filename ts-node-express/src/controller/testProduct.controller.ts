import { Router, Request, Response } from 'express';
import { testProduct } from '../model/testProduct';

import { createPool, MysqlError, PoolConnection, Query } from 'mysql';
import { connection } from '../config/db';

const productList: testProduct[] = [
    {
        id: 1,
        testDate: "1/1/2024",
        testText: "Hello",
        testVarChar: "BOOO"
    },
    {
        id: 2,
        testDate: "1/1/2024",
        testText: "Gagagoogie",
        testVarChar: "TEST"
    }
]

const getAll = (req: Request, res: Response) => {
    res.status(200).send(productList);
}

// const getAll = (req: Request, res: Response) => {
//     console.log("hi");
//     connection.getConnection((err: any, conn: PoolConnection) => {
//         console.log("[Database]: Connection made");
//         conn.query("SELECT * FROM 'test';", (err, resultSet: testProduct[]) => {
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

export default { getAll }