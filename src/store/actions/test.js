import { test } from "@server/test";

/**
 *  测试redux
 */
export const testAction = () => async (dispatch) => {
  const res = await test();
  console.log(res);
};
