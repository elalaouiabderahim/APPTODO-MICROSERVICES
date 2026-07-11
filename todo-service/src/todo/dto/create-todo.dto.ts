import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string | undefined;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsString()
  priority?: string;

  @IsOptional()
  dueDate?: Date;

  @IsInt()
  userId: number | undefined;
}