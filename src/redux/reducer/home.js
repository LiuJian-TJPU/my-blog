import { ACTION_HOME_TOGGLE_SIDER } from 'constants/actions/home';

const initialState = {
  collapsed: true // 侧边栏是否折叠
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_HOME_TOGGLE_SIDER:
      return {
        ...state,
        collapsed:action.payload
      }
    default:
      return state
  }
}
export default reducer