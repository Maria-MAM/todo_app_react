import React, {Component} from 'react';
import DragDrop from './DragDrop';
import PropTypes from 'prop-types';


class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#FBFDFC',
      padding: '10px',
      margin: '1px 150px',
      borderBottom: '1px dotted #ccc',
      textDecoration : this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
      return (
        <DragDrop >
          <div style={this.getStyle()}>
            <p> 
              <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={this.props.todo.completed} />
               {' '}
              {title} 
              <button onClick = {this.props.deleteTodo.bind(this, id)} style={btnStyle}> x </button>
            </p>
          </div>
          </DragDrop>
      ); 
    }
  
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#E9845F',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  outline: 'none',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
