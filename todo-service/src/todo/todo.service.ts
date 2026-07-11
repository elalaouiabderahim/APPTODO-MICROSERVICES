import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TodoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly http: HttpService,
) {}

  async create(createTodoDto: CreateTodoDto) {
    const userId = createTodoDto.userId;
    if (userId === undefined) {
      throw new Error('UserId is required');
    }

    const user = await this.http.axiosRef.get(
      `http://localhost:3002/users/${userId}`,
    );

    if (!user.data) {
      throw new Error('User not found');
    }

    return this.prisma.todo.create({
      data: {
        title: createTodoDto.title!,
        userId,
      },
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}