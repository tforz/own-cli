import { UserApi } from "./user";

const isSuccess = (res: any) => {
  return res && res.code === 1;
};

export const Api = {
  isSuccess: isSuccess,
  UserApi: new UserApi(),
};
