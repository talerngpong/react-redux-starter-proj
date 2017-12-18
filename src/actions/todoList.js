import { DEFAULT, ADD_NEW_TODO, DELETE_TODO } from './types'

const dispatchDefaultValue = {
  type: DEFAULT,
  payload: {},
}

const addNewTodo = newTodo => (dispatch) => {
  if (newTodo) {
    return dispatch({
      type: ADD_NEW_TODO,
      payload: {
        newTodo,
      },
    })
  }

  return dispatch(dispatchDefaultValue)
}

const deleteTodo = timestamp => (dispatch) => {
  if (timestamp) {
    return dispatch({
      type: DELETE_TODO,
      payload: {
        timestamp,
      },
    })
  }

  return dispatch(dispatchDefaultValue)
}

export {
  addNewTodo,
  deleteTodo,
}