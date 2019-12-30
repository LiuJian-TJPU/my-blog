import { ACTION_HOME_TOGGLE_SIDER, ACTION_HOME_FOLD_SIDER } from 'constants/actions/home';

export const actionHomeToggleSider = (payload) => ({
  type: ACTION_HOME_TOGGLE_SIDER,
  payload
})
export const actionHomeFoldSider = (payload) => ({
  type: ACTION_HOME_FOLD_SIDER,
  payload
})