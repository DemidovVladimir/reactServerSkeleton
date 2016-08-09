import {
  TASK_CREATE
} from '../constants/Page'

export function createStuff() {
    return (dispatch) => {
        dispatch({
            type: TASK_CREATE,
            payload: 'checkout'
        })
    }
}

export function generateFile(page, val) {
  return (dispatch) => {
    var body = {title: page, value: val};
    body = JSON.stringify(body);
    fetch("/generate", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: body
    })
    dispatch({
      type: 'GENERATED_NEW_FILE',
      payload: body
    })
  }
}

export function addPage(title) {
  return (dispatch, getState) => {
    const state = getState();
    var elementsToCreate = state.task.elementsToCreate;
    elementsToCreate.push(title);
    dispatch({
      type: 'ADDING_ELEMENT_TO_THE_PAGE',
      payload: elementsToCreate
    })
  }
}
