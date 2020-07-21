export const isProd = process.env.NODE_ENV === "production";
export const isDev = process.env.NODE_ENV === "development";

export const api_env = process.env.API_ENV;

export const testUa = (regexp) =>
  regexp.test(navigator.userAgent.toLowerCase());

export const isAndroid = testUa(/android/);

export const isIOS = testUa(/ipad|iphone|ipod/);

export const isWeb = !isAndroid && !isIOS;
