import { IsNotEmpty } from "class-validator";

export class CreateSessionDto {
    UUID: string;
  
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    date: Date;

    urlSession: string;

    completed: boolean;
}