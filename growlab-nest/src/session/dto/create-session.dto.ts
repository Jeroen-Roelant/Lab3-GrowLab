import { IsNotEmpty } from "class-validator";

export class CreateSessionDto {
    UUID: string;
  
    @IsNotEmpty()
    poster: string;
  
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    urlSession: string;
}