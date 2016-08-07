const initialState = {
  stuf: 'new'
};

export default function builtYear(state = initialState, action) {
  switch (action.type) {
    case 'TASK_CREATE':
        return {
          ...state,
          stuf: action.payload
        }
    default:
      return state;
  }
}
