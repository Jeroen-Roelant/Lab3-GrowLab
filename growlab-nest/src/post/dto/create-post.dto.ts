import { IsNotEmpty, IsEnum } from 'class-validator';

export enum Visibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export enum PostType {
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
}

export class CreatePostDto {
  UUID: string;

  @IsNotEmpty()
  poster: string;

  @IsEnum(Visibility)
  visibility: Visibility;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsEnum(PostType)
  type: PostType;

//   comments: string;
//   likes: string; 
}