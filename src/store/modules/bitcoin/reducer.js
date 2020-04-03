const initialState = {
  data: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@bitcoin/GET_SUCCESS':
      return { ...state, data: action.payload.data };

    case '@bitcoin/DELETE_REQUEST':
      return {
        ...state,
        data: state.data.filter(bitcoin => bitcoin.id !== action.id),
      };

    default:
      return state;
  }
}
