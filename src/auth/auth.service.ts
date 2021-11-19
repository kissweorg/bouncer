import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private jwtService: JwtService,
  ) {}

  async authenticate(userId: string) {
    const res = await firstValueFrom(
      this.httpService.get(`http://localhost:8082/api/users/v1/${userId}`),
    );
    const user = res.data;
    console.log(user);

    return { accessToken: await this.jwtService.generateAccessToken(user._id) };
  }
}
