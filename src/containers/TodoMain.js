import { connect } from 'react-redux'
import { addNewTodo, deleteTodo } from '../actions/todoList'
import TodoMain from '../components/TodoMain'

const mapStateToProps = state => ({
  todoList: state.todoList,
})

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => dispatch(addNewTodo(newTodo)),
  deleteTodo: timestamp => dispatch(deleteTodo(timestamp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain)