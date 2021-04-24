import produce from 'immer';

const initialState = {
  user: null,
  isLogin: false,
};

export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_USERINFO':
        draft.user = action.payload.user;
        draft.isLogin = true;
        return;
      case 'SET_LOGININFO':
        draft.loginInfo = action.payload.user;
        return;
      case 'UPDATE_USERINFO':
        draft.user = action.payload.user;
        return;
      case 'LOGOUT':
        draft.user = null;
        draft.isLogin = false;
        return;
      default:
        return state;
    }
  });
}
