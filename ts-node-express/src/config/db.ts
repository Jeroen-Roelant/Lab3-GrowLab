import { PoolConnection, createPool } from 'mysql2';
import dotenv from "dotenv";
import express, {Request, Response} from 'express';

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

// Function to check if database connection is made
export async function dbTest(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        connection.getConnection((err: NodeJS.ErrnoException | null, conn: PoolConnection) => {
            if (err) {
                resolve(false); // Connection failed
            } else {
                resolve(!!conn); // Return true if conn is defined
            }
        });
    });
}
