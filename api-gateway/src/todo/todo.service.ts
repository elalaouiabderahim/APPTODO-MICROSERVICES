import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TodoService {
  constructor(private readonly http: HttpService) {}

  async findAll() {
    const response = await this.http.axiosRef.get(
      'http://localhost:3003/todo',
    );

    return response.data;
  }

  async findOne(id: number) {
    const response = await this.http.axiosRef.get(
      `http://localhost:3003/todo/${id}`,
    );

    return response.data;
  }

  async create(data: any) {
    const response = await this.http.axiosRef.post(
      'http://localhost:3003/todo',
      data,
    );

    return response.data;
  }

  async update(id: number, data: any) {
    const response = await this.http.axiosRef.patch(
      `http://localhost:3003/todo/${id}`,
      data,
    );

    return response.data;
  }

  async remove(id: number) {
    const response = await this.http.axiosRef.delete(
      `http://localhost:3003/todo/${id}`,
    );

    return response.data;
  }
}