import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] }
  }

  componentDidMount() {
    // this.todoButton.onClick = ""
    this.setState({ items: ["doggo"] })
    this.setState(st => ({ items: st.items.concat(["groggo", "yoggo"]) }))
  }

  submitForm = (event) => {
    event.preventDefault();
    if (this.todoInput.value) {
      var inputVal = this.todoInput.value;
      this.todoInput.value = ""

      this.addItem(inputVal);
    }
  }

  clearForm = () => {
    this.setState(st => ({ items: [] }))
  }

  reverseList = () => {
    this.setState(st => (
      { items: st.items.reverse() }
    ))
  }
  //a function that just: calls a function() instead of returning an object{items: st.etc}, as the argument to setState? is this legitimate?

  //talked to Jordan. Now this setState function has a callback function as well. it's
  //the console.log anonymous function below.

  removeFirstItem = () => {
    this.setState(() => {
      this.state.items.splice(0, 1)
    }, () => console.log(this.state))
  }

  addItem = (inputVal) => {
    console.log(`I'm adding an item. right now the state.items is ${this.state.items.toString()}`)
    this.setState(st => (
      { items: st.items.concat(inputVal) }), () => {
        console.log(`callingback now. I've added an item. Right now the state.items is ${this.state.items}`)
      }
    )
  }

  displayItem = (x) => <li>{x}</li>




  render() {
    return (<div>
      <form onSubmit={this.submitForm}>
        <input type="" ref={r => this.todoInput = r} placeholder="enter text here" />
        <button type="submit" ref={r => this.todoButton = r}>click me</button>
        <button type="button" ref={r => this.clearButton = r} onClick={this.clearForm}>clear</button>
        <button type="button" ref={r => this.reverseButton = r} onClick={this.reverseList}>reverse</button>
        <button type="button" ref={r => this.removeFirstButton = r} onClick={this.removeFirstItem}>Remove First Item</button>


      </form>
      <ul>
        {this.state.items.map(this.displayItem)}
      </ul></div>)
  }
}

export default App;
