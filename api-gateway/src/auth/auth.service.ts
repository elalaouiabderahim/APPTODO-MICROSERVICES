import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpService) {}

  async login(data: any) {
    const response = await this.http.axiosRef.post(
      'http://localhost:3001/auth/login',
      data,
    );

    return response.data;
  }

  async register(data: any) {
    const response = await this.http.axiosRef.post(
      'http://localhost:3001/auth/register',
      data,
    );

    return response.data;
  }
}