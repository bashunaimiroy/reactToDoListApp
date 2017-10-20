import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList/todoList.js'

class App extends Component {


  render() {
    return( <div>
       <TodoList />
       <TodoList />
    </div>)
  }
}



export default App;
