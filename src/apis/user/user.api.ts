import { Http } from "../http";

export class UserApi extends Http {
  async getEnums() {
    const res: any = await this.get('/base/enums')
    return res
  }

}
