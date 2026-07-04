import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: registerDto.email,
      },
    });

    if (existingUser) {
      throw new BadRequestException('Cet email existe déjà.');
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Créer l'utilisateur
    const user = await this.prisma.user.create({
      data: {
        firstName: registerDto.firstName,
        lastName: registerDto.lastName,
        email: registerDto.email,
        password: hashedPassword,
      },
    });

    // Ne pas renvoyer le mot de passe
    const { password, ...result } = user;

    return {
      message: 'Utilisateur créé avec succès.',
      user: result,
    };
  }
  async login(loginDto: LoginDto) {

  // Rechercher l'utilisateur par email
  const user = await this.prisma.user.findUnique({
    where: {
      email: loginDto.email,
    },
  });

  if (!user || !loginDto.password) {
    throw new UnauthorizedException('Email ou mot de passe incorrect');
  }

  // Vérifier le mot de passe
  const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password
  );

  if (!isPasswordValid) {
    throw new UnauthorizedException('Email ou mot de passe incorrect');
  }

  // Créer le payload JWT
  const payload = {
    sub: user.id,
    email: user.email,
  };

  // Générer le token
  const accessToken = this.jwtService.sign(payload);

  return {
    message: 'Connexion réussie',
    access_token: accessToken,
  };
}
}