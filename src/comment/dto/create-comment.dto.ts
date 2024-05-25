import { IsNotEmpty, IsEnum } from 'class-validator';

export class CreateCommentDto {
  UUID: string;

  @IsNotEmpty()
  poster: string;

  @IsNotEmpty()
  content: string;

}