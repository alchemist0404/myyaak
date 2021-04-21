import produce from 'immer';

const initialState = {
  requestType: null,
};

export default function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_REQUEST_INFO':
        draft.requestType = action.payload.requestType;
        return;
      default:
        return state;
    }
  });
}
