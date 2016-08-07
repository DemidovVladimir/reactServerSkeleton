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
