import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
