/* global
describe,
it,
expect,
beforeEach,
*/

import todoListReducer from '../../src/reducers/todoList'
import { ADD_NEW_TODO, DELETE_TODO } from '../../src/actions/types'


describe('todoList reducer', () => {
  const currentState = [
    {
      timestamp: 13579,
      text: 'exampleTodo',
    },
    {
      timestamp: 77777,
      text: 'makeSomethingDone',
    },
    {
      timestamp: 32132,
      text: 'anotherTask',
    },
    {
      timestamp: 87687,
      text: 'doNotForgetToDoThis',
    },
  ]

  describe('general cases', () => {
    it('Should return current state when action.type is undefined', () => {
      const action = {}

      expect(todoListReducer(currentState, action))
        .toEqual(currentState)
    })

    it('Should return current state when action.type is null', () => {
      const action = { type: null }

      expect(todoListReducer(currentState, action))
        .toEqual(currentState)
    })
  })

  describe('action.type = ADD_NEW_TODO', () => {
    let action

    beforeEach(() => {
      action = { type: ADD_NEW_TODO }
    })

    it('Should return new state with the last element \'newTodo\' in the state', () => {
      const payload = {
        newTodo: {
          timestamp: 2468,
          text: 'newTodoV2',
        },
      }

      action = { ...action, payload }

      const newState = currentState.slice()
      newState.push(action.payload.newTodo)

      expect(todoListReducer(currentState, action))
        .toEqual(newState)
    })
  })

  describe('action.type = DELETE_TODO', () => {
    let action

    beforeEach(() => {
      action = { type: DELETE_TODO }
    })

    it('Should return current state when inputing non-matched timestamp', () => {
      const payload = {
        timestamp: 9999999,
      }

      action = { ...action, payload }

      expect(todoListReducer(currentState, action))
        .toEqual(currentState)
    })

    it('Should return smaller state when inputing matched timestamp', () => {
      // { timestamp: 77777, text: 'makeSomethingDone' }
      const payload = {
        timestamp: 77777,
      }

      action = { ...action, payload }

      expect(todoListReducer(currentState, action).indexOf(payload.timestamp))
        .toEqual(-1)
    })
  })
})