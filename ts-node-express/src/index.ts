// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as bodyParser from 'body-parser';

// import dbTest from "./config/db"

import routes from './routes/route';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// applying the routes to the basepath '/api'
app.use('/api', routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express & TypeScript Server running");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});