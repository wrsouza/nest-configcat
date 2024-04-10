import { Module } from '@nestjs/common';
import { ConfigCatService } from './configcat.service';

@Module({
  providers: [ConfigCatService],
  exports: [ConfigCatService],
})
export class ConfigCatModule {}
