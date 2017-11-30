import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({ timestamp, text, onDoneButtonClicked }) => {
  const onButtonClicked = () => {
    onDoneButtonClicked(timestamp)
  }

  return (
    <li><button onClick={onButtonClicked}>Done</button> <div id="todo_text">{ text }</div></li>
  )
}

TodoListItem.propTypes = {
  timestamp: PropTypes.number.isRequired,
  text: PropTypes.string,
  onDoneButtonClicked: PropTypes.func,
}

TodoListItem.defaultProps = {
  text: '',
  onDoneButtonClicked: () => {},
}

export default TodoListItem