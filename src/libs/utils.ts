/**
 * @description: 常用的工具类函数
 */

export default {
  /**
   * @description: 防抖
   * @param {type} func , wait
   */
  deBounce: (func: any, wait: number) => {
    let timeOut: any = null;
    return function (...args: any) {
      clearTimeout(timeOut);//一定要清除定时器
      timeOut = setTimeout(() => {
        func(...args);
      }, wait);
    };
  },

  /**
   * @description: 节流
   * @param {type} func , wait
   */
  throttle: (func: any, wait: number) => {
    let last = 0;
    return (...args: any) => {
      const current_time = +new Date();
      if (current_time - last > wait) {
        // func.apply(this, ...args);
        func(...args);
        last = +new Date();
      }
    };
  },
  /**
   * @description: storage相关
   */
  storage: {
    setItem: async (key: string, value: string) => {
      localStorage.setItem(key, value);
    },
    getItem: async (key: string) => {
      return localStorage.getItem(key);
    },
    /**
     * @description: 注意，如果对象有函数，会丢失
     * @param {type} 
     * @return: 
     */
    setObject: async (key: string, value: any) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    getObject: async (key: string) => {
      const res = localStorage.getItem(key);
      if (!res) {
        return ""
      }
      try {
        return JSON.parse(res)
      } catch (e) {
        return {};
      }
    },
    clear: async () => {
      localStorage.clear();
    }
  },

  isIphoneX: () => {
    if (/iphone/gi.test(window.navigator.userAgent)) {
      let x = (window.screen.width === 375 && window.screen.height === 812);
      let xsMax = (window.screen.width === 414 && window.screen.height === 896);
      let xR = (window.screen.width === 414 && window.screen.height === 896);
      if (x || xsMax || xR) {
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  },

  /**
   * @description: ios or andriod
   * @return: 'Android' 'IOS'
   */
  deviceClient: () => {
    const userAgent = navigator.userAgent;
    let isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;
    let isIOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isAndroid) {
      return 'Android';
    } else if (isIOS) {
      return 'IOS';
    }
  },

  isWeChatClient: () => {
    const userAgent = navigator.userAgent;
    return /micromessenger/.test(userAgent.toLowerCase()) ? true : false;
  },

  /**
   * @description: 时间戳转换日期
   * @param {type}  YYYY-MM-DD HH:ii:ss
   * @return: YYYY-MM-DD HH:ii:ss
   */
  formatDate: (date: any, formatStr: any) => {
    const arrWeek = ['日', '一', '二', '三', '四', '五', '六'];
    const str = formatStr
      .replace(/yyyy|YYYY/, date.getFullYear())
      .replace(/yy|YY/, addZero(date.getFullYear() % 100, 2))
      .replace(/mm|MM/, addZero(date.getMonth() + 1, 2))
      .replace(/m|M/g, date.getMonth() + 1)
      .replace(/dd|DD/, addZero(date.getDate(), 2))
      .replace(/d|D/g, date.getDate())
      .replace(/hh|HH/, addZero(date.getHours(), 2))
      .replace(/h|H/g, date.getHours())
      .replace(/ii|II/, addZero(date.getMinutes(), 2))
      .replace(/i|I/g, date.getMinutes())
      .replace(/ss|SS/, addZero(date.getSeconds(), 2))
      .replace(/s|S/g, date.getSeconds())
      .replace(/w/g, date.getDay())
      .replace(/W/g, arrWeek[date.getDay()]);
    return str;
  },
}

function addZero(v: any, size: any) {
  for (let i = 0, len = size - `${v}`.length; i < len; i++) {
    v = `0${v}`;
  }
  return `${v}`;
}