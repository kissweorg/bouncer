import { Controller, Post } from '@nestjs/common';
import { DateTime } from 'luxon';
import { AuthService } from './auth.service';

const TEST_OAUTH = {
  _id: '619a805075f0fe2b3175c124',
  oauthId: '1234',
  userId: '619a897275f0fe2b3175c126',
  createdAt: DateTime.now(),
  updatedAt: DateTime.now(),
};

@Controller('v1')
export class AuthV1Controller {
  constructor(private authService: AuthService) {}

  @Post()
  async authenticate() {
    return this.authService.authenticate(TEST_OAUTH.userId);
  }
}
