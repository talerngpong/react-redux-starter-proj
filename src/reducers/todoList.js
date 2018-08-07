import { ADD_NEW_TODO, DELETE_TODO } from '../actions/types'

const initialState = []

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO: {
      const newState = state.slice()
      newState.push(action.payload.newTodo)
      return newState
    }
    case DELETE_TODO: {
      const filteredTodoList =
        state.filter(todo => (todo.timestamp !== action.payload.timestamp))

      if (filteredTodoList.length !== state.length) {
        return filteredTodoList
      }
      return state
    }
    default:
      return state
  }
}

export default todoListReducer