import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import './App.css';
import uuid from 'uuid';
import axios from 'axios';


class App extends Component {
  state = {
    todos: [ ]
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => this.setState({ todos: response.data}));
  }

  // Toggle complete
  markComplete =(id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  });
  };

  // Delete Todo
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] }) );
  };


  // Add Todo
  addTodo = (title) => {
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then((response) => {
        response.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, response.data] });
  });
};

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
               
            </React.Fragment>
          )} />
          <Route path="/about" component = {About} /> 
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
