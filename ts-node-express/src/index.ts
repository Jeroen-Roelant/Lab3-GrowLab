import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger.json";
import * as bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/route';
import { dbTest } from "./config/db";
import moment from "moment";

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
  `<pre>
  🌿 <b>GrowLab</b> by Jeroen Roelant & Marlène Braem. <br>
  🌐 Express 4.18.2 & TypeScript API Server running. <br>
  ⌚ Uptime ${moment.utc(moment().diff(moment(startTime))).format('HH:mm:ss')}.<br>
  🪣 ${dbState}. <br>
  🗺️ ${routes.stack.length} Available routes. <br>
  </pre>`;

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
