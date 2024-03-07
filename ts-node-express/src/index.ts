import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger.json";
import * as bodyParser from 'body-parser';
import cors from 'cors';
import moment from "moment";

import routes from './routes/route';
import { dbTest } from "./config/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const startTime: Date = new Date();

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Voeg de cors-middleware toe
app.use(cors());

// applying the routes to the basepath '/api'
app.use('/api', routes);

app.get("/", async (req: Request, res: Response) => {
  let dbState: string = "MySQL Connection failed";
  if (await dbTest()){
    dbState = "MySQL Connection made";
  }
  
  let msg: string = 
  `
<!DOCTYPE html>
<html>
  <pre>
    <head>
      <title>Page Title</title>
    </head> 
    <body>
      <div>
        <p>
🌿 <b>GrowLab</b> by <a href="https://github.com/Jeroen-Roelant">Jeroen Roelant</a> & <a href="https://github.com/marlenebraem1999">Marlène Braem.</a> <br>
🌐 Express 4.18.2 & TypeScript API Server running. <br>
⌚ Uptime ${moment.utc(moment().diff(moment(startTime))).format('HH:mm:ss')}.<br>
🪣 ${dbState}. <br>
🗺️ ${routes.stack.length} Available routes. <br>
        </p>
      </div>
    </body>
  </pre>
  <style>
    body{
      height: 100vh;
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
<html>
  `;

  res.send(msg);
});

app.listen(port, async () => {
  console.log(  `🟢 [Express]:  Server is running at http://localhost:${port} `);
  if(await dbTest()){
    console.log(`🟢 [MySQL]:    MySQL database Connection made at http://${process.env.DB_HOST}/${process.env.DB_PORT} using user \'${process.env.DB_USER}\'`);
  }
  else{
    console.log(`🔴 [MySQL]:    MySQL database failed to connect at http://${process.env.DB_HOST}:${process.env.DB_PORT} using user \'${process.env.DB_USER}\'`);
  }
});
