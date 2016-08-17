const initialState = {
  stuf: 'new',
  elementsToCreate: []
};

export default function builtYear(state = initialState, action) {
  switch (action.type) {
    case 'TASK_CREATE':
        return {
          ...state,
          stuf: action.payload
        }
    case 'ADDING_ELEMENT_TO_THE_PAGE':
        return {
          ...state,
          elementsToCreate: action.payload
        }
    default:
      return state;
  }
}
