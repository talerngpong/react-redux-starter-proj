import React, { Component } from 'react'
import TodoListItem from './TodoListItem'

// https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

export default class TodoMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentNewTodoText: '',
      todoList: [],
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onNewTodoButtonClick = this.onNewTodoButtonClick.bind(this)
    this.onDoneButtonClicked = this.onDoneButtonClicked.bind(this)
  }

  onInputChange(event) {
    this.setState({
      currentNewTodoText: event.target.value,
    })
  }

  onNewTodoButtonClick() {
    const newTodoList = this.state.todoList.slice()
    newTodoList.push({
      text: this.state.currentNewTodoText,
      timestamp: new Date().getTime(),
    })
    this.setState({
      todoList: newTodoList,
      currentNewTodoText: '',
    })
  }

  onDoneButtonClicked(timestamp) {
    const filteredTodoList = this.state.todoList.filter(todo => (todo.timestamp !== timestamp))
    if (filteredTodoList.length !== this.state.todoList.length) {
      this.setState({
        todoList: filteredTodoList,
        currentNewTodoText: this.state.currentNewTodoText,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div>
          My Todo is: <input
            type="text"
            value={this.state.currentNewTodoText}
            onChange={this.onInputChange}
          />
          <button onClick={this.onNewTodoButtonClick}>Add TODO</button>
          <br />
        </div>
        <div>
          <h3>My Todo List</h3>
          <ul>
            {
              this.state.todoList.map(todo =>
                (<TodoListItem {...todo} onDoneButtonClicked={this.onDoneButtonClicked} />))
            }
          </ul>
        </div>
      </div>
    )
  }
}