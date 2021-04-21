export const setUserInfo = (user) => {
  return {
    type: 'SET_USERINFO',
    payload: {user},
  };
}

export const updateUserInfo = (user) => {
  return {
    type: 'UPDATE_USERINFO',
    payload: {user},
  };
}

export const LogOut = () => {
  return {type: 'LOGOUT'};
}