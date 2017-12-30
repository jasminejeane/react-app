import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Man', age: 21},
      {name: 'Steph', age: 27},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log("was clicked");
    // this.state.persons[0].name = "Jazzy Fresh";
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26},
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Steph', age: 26},
    ]
  })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <button onClick={ () => this.switchNameHandler('Jasmine!!')}>Switch Name</button>
        <Person
          name= {this.state.persons[0].name}
          age={this.state.persons[0].age}/>
          <Person
            name= {this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>
            My hobbies are ....</Person>



            <Person
              name= {this.state.persons[2].name}
              age={this.state.persons[2].age}/>



      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
