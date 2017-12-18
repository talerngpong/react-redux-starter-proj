/* global
describe,
it,
beforeEach,
expect,
*/

import React from 'react'
import sinon from 'sinon'
import TodoListItem from '../../src/components/TodoListItem'
import { shallow } from '../testHelper'

describe('TodoListItem component', () => {
  let spy
  let props
  let wrapper

  beforeEach(() => {
    spy = sinon.spy()
    props = {
      timestamp: 1321324,
      text: 'sampleTodo',
      onDoneButtonClicked: spy,
    }
    wrapper = shallow(<TodoListItem {...props} />)
  })

  it('Should show right text with pre-spacing', () => {
    expect(wrapper.find('#todo_text').children().text()).toBe('sampleTodo')
  })

  it('Should call onDoneButtonClicked', () => {
    wrapper.find('button').simulate('click')

    expect(spy.getCall(0).args[0]).toBe(1321324)
  })
})