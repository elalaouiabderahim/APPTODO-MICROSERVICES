import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UsersService {
  update(arg0: number, body: any) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly http: HttpService) {}

  async findAll() {
    const response = await this.http.axiosRef.get(
      'http://localhost:3002/users',
    );

    return response.data;
  }

  async findOne(id: number) {
    const response = await this.http.axiosRef.get(
      `http://localhost:3002/users/${id}`,
    );

    return response.data;
  }

  async create(data: any) {
    const response = await this.http.axiosRef.post(
      'http://localhost:3002/users',
      data,
    );

    return response.data;
  }
}