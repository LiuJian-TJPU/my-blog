/**
 * 防抖函数
 * params: callback 设为箭头函数
 */
export function debounce(callback, delay = 300) {
  let timer = null;
  return function (...args){
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}