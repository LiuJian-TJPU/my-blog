import { ACTION_HOME_TOGGLE_SIDER, ACTION_HOME_FOLD_SIDER } from 'constants/actions/home';

const initialState = {
  siderShow: true, //是否显示侧边栏
  collapsed: true // 侧边栏是否折叠
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_HOME_FOLD_SIDER:
      return {
        ...state,
        collapsed: action.payload
      }
    case ACTION_HOME_TOGGLE_SIDER:
      return {
        ...state,
        siderShow: action.payload
      }
    default:
      return state
  }
}
export default reducer