/* global
describe,
it,
expect,
beforeEach,
*/

import React from 'react'
import { Provider } from 'react-redux'
import configMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import TodoMainContainer from '../../src/containers/TodoMain'
import TodoMainComponent from '../../src/components/TodoMain'
import { ADD_NEW_TODO, DELETE_TODO } from '../../src/actions/types'
import { mount } from '../testHelper'

describe('TodoMain container', () => {
  const createStore = configMockStore([thunk])
  let wrapper
  let store

  describe('stateToProps', () => {
    beforeEach(() => {
      const state = {
        todoList: [
          { timestamp: 213213, text: 'firstTodo' },
          { timestamp: 332323, text: 'secondTodo' },
        ],
      }

      store = createStore(state)
      wrapper = mount(<Provider store={store}><TodoMainContainer /></Provider>)
      wrapper = mount(<Provider store={store}><TodoMainContainer /></Provider>)
        .find(TodoMainContainer)
        .find(TodoMainComponent)
    })

    it('receive todoList props from state.todoList', () => {
      expect(wrapper.prop('todoList')).toEqual([
        { timestamp: 213213, text: 'firstTodo' },
        { timestamp: 332323, text: 'secondTodo' },
      ])
    })
  })

  describe('dispatchToProps', () => {
    beforeEach(() => {
      const state = {
        todoList: [],
      }
      store = createStore(state)
      wrapper = mount(<Provider store={store}><TodoMainContainer /></Provider>)
        .find(TodoMainContainer)
        .find(TodoMainComponent)
    })

    it('Should dispatch ADD_NEW_TODO action via props.addNewTodo', () => {
      expect(wrapper.prop('addNewTodo')).not.toBeNull()
      expect(wrapper.prop('addNewTodo')).toBeInstanceOf(Function)

      wrapper.props().addNewTodo({ timestamp: 123214, text: 'sampleOfNewTodo' })
      const actions = store.getActions()
      const expectedActions = [
        {
          type: ADD_NEW_TODO,
          payload: {
            newTodo: {
              timestamp: 123214,
              text: 'sampleOfNewTodo',
            },
          },
        },
      ]

      expect(actions).toEqual(expectedActions)
    })

    it('Should dispatch DELETE_TODO action via props.deleteTodo', () => {
      expect(wrapper.prop('deleteTodo')).not.toBeNull()
      expect(wrapper.prop('deleteTodo')).toBeInstanceOf(Function)

      wrapper.props().deleteTodo(8978696)
      const actions = store.getActions()
      const expectedActions = [
        {
          type: DELETE_TODO,
          payload: {
            timestamp: 8978696,
          },
        },
      ]

      expect(actions).toEqual(expectedActions)
    })
  })
})
