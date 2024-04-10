import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigCatModule } from '../../providers/configcat/configcat.module';

@Module({
  imports: [ConfigCatModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
