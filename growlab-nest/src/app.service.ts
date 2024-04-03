import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    
    let msg: string = 
  `
<!DOCTYPE html>
<html>
  <pre>
    <head>
      <title> 🌿 GrowLab NestJS running</title>
    </head> 
    <body>
      <div>
        <p>
🌿 <b>GrowLab</b> by <a href="https://github.com/Jeroen-Roelant">Jeroen Roelant</a> & <a href="https://github.com/marlenebraem1999">Marlène Braem.</a> <br>
🌐 NEST & TypeScript API Server running. <br>
🗃 MySQL Connection made. <br>
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

    return msg;
  }
}
