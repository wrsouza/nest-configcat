import { Injectable } from '@nestjs/common';
import { ConfigCatService } from '../../providers/configcat/configcat.service';

@Injectable()
export class UserService {
  constructor(private readonly configCatService: ConfigCatService) {}

  async getList() {
    const emptyList = [];
    const mockedList = this.getMockedList();
    const showMockedList =
      await this.configCatService.getFeatureFlag('USER_MOCKED_LIST');

    if (showMockedList) {
      return mockedList;
    }

    return emptyList;
  }

  private getMockedList() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@domain.com',
      },
    ];
  }
}
