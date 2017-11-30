import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

// https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

export default class TodoMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentNewTodoText: '',
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
    this.props.addNewTodo({
      text: this.state.currentNewTodoText,
      timestamp: new Date().getTime(),
    })
    this.setState({
      currentNewTodoText: '',
    })
  }

  onDoneButtonClicked(timestamp) {
    this.props.deleteTodo(timestamp)
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
              this.props.todoList.map(todo =>
                (
                  <TodoListItem
                    key={todo.timestamp}
                    {...todo}
                    onDoneButtonClicked={this.onDoneButtonClicked}
                  />))
            }
          </ul>
        </div>
      </div>
    )
  }
}

TodoMain.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object),
  addNewTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
}

TodoMain.defaultProps = {
  todoList: [],
  addNewTodo: () => {},
  deleteTodo: () => {},
}