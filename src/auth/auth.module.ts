import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from 'src/jwt/jwt.module';
import { AuthService } from './auth.service';
import { AuthV1Controller } from './auth.v1.controller';

@Module({
  imports: [HttpModule, JwtModule],
  providers: [AuthService],
  controllers: [AuthV1Controller],
})
export class AuthModule {}
