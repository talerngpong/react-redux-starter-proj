/* global
describe,
it,
expect,
*/

import configMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addNewTodo, deleteTodo } from '../../src/actions/todoList'
import { ADD_NEW_TODO, DELETE_TODO } from '../../src/actions/types'

describe('todoList action creator', () => {
  const mockStore = configMockStore([thunk])

  describe('addNewTodo', () => {
    it('Should dispatch default value when inputing undefined', () => {
      const expectedActions = [
        {
          type: 'DEFAULT',
          payload: {},
        },
      ]

      const store = mockStore()

      store.dispatch(addNewTodo(undefined))

      const resultActions = store.getActions()
      expect(resultActions).toEqual(expectedActions)
    })

    it('Should dispatch newTodo action', () => {
      const expectedActions = [
        {
          type: ADD_NEW_TODO,
          payload: {
            newTodo: {
              timestamp: 123567,
              text: 'sampleTodoText',
            },
          },
        },
      ]

      const store = mockStore()

      store.dispatch(addNewTodo({ timestamp: 123567, text: 'sampleTodoText' }))

      const resultActions = store.getActions()
      expect(resultActions).toEqual(expectedActions)
    })
  })

  describe('deleteTodo', () => {
    it('Should dispatch default value when inputing undefined', () => {
      const expectedActions = [
        {
          type: 'DEFAULT',
          payload: {},
        },
      ]

      const store = mockStore()

      store.dispatch(deleteTodo(undefined))

      const resultActions = store.getActions()
      expect(resultActions).toEqual(expectedActions)
    })

    it('Should dispatch newTodo action', () => {
      const expectedActions = [
        {
          type: DELETE_TODO,
          payload: {
            timestamp: 345679,
          },
        },
      ]

      const store = mockStore()

      store.dispatch(deleteTodo(345679))

      const resultActions = store.getActions()
      expect(resultActions).toEqual(expectedActions)
    })
  })
})