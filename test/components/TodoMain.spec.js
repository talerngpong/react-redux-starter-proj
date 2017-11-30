/* global
describe,
it,
expect,
*/

import React from 'react'
import TodoMain from '../../src/components/TodoMain'
import { shallow } from '../testHelper'

describe('TodoMain component', () => {
  const todoList = [
    {
      timestamp: 2434234,
      text: 'fdsfdsa',
    },
    {
      timestamp: 3433434,
      text: 'secondTodoText',
    },
    {
      timestamp: 97686876,
      text: 'khjkhjk',
    },
    {
      timestamp: 65473675,
      text: 'mnbmnbmh',
    },
  ]

  it('Should render right todoList via when inputing todoList props', () => {
    const wrapper = shallow(<TodoMain todoList={todoList} />)

    expect(wrapper.find('ul').children().length).toBe(4)
  })
})