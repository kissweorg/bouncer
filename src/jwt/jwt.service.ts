import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { importPKCS8, SignJWT } from 'jose';

@Injectable()
export class JwtService {
  private readonly logger = new Logger(JwtService.name);
  private signingSk: string;
  private signingAlg: string;

  constructor(configService: ConfigService) {
    this.signingSk = configService.get('SIGNING_SK');
    this.signingAlg = configService.get('SIGNING_ALGORITHM');
  }

  async generateAccessToken(userId: string) {
    const privateKey = await importPKCS8(this.signingSk, this.signingAlg);
    const jwt = await new SignJWT({})
      .setProtectedHeader({ alg: this.signingAlg })
      .setSubject(userId)
      .setIssuedAt()
      .setIssuer('bouncer-dev')
      .setAudience('gatekeeper-dev')
      .setExpirationTime('2h')
      .sign(privateKey);
    this.logger.log(`Generated access token = ${jwt} for user = ${userId}`);
    return jwt;
  }
}
