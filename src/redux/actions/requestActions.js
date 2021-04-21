export const setRequestInfo = (requestType) => {
  return {
    type: 'SET_REQUEST_INFO',
    payload: {requestType},
  };
}