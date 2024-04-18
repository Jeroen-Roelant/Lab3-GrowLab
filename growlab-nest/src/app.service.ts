import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    const filePath = join(__dirname, '../hello.html');
    const htmlContent = readFileSync(filePath, 'utf8');

    return htmlContent;
  }
}
