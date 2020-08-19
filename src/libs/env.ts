import * as host from './hostConig'

enum ENV {
  dev = 'dev',
  test = 'test',
  pro = 'pro'
}

// 环境
const env: string = process.env.REACT_APP_SECRET_API !== 'development' ? ENV.pro : ENV.dev;

// 版本号
export const Version = '1.0';

const URL = {
  host: '',
};

switch (env as string) {
  case ENV.dev:
    URL.host = host.DEV_HOST;
    break;
  case ENV.test:
    URL.host = host.TEST_HOST;
    break;
  case ENV.pro:
    URL.host = host.PRO_HOST;
    break;
  default:
    URL.host = host.DEV_HOST;
}

export const isDev = env === ENV.dev || env === ENV.test;
export const Host = URL.host;
export const Urls = URL;

