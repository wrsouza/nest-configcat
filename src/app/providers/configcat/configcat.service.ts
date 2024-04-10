import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getClient, IConfigCatClient } from 'configcat-node';

@Injectable()
export class ConfigCatService {
  private readonly configCat: IConfigCatClient;

  constructor(private readonly configService: ConfigService) {
    this.configCat = getClient(configService.get<string>('CONFIG_CAT_SDK_KEY'));
  }

  async getFeatureFlag(key: string, defaultValue = false): Promise<boolean> {
    return this.configCat.getValueAsync<boolean>(key, defaultValue);
  }
}
