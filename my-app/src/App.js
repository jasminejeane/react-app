import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Man', age: 21},
      {name: 'Steph', age: 30},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log("was clicked");
    // this.state.persons[0].name = "Jazzy Fresh";
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: 'Man', age: 21},
      {name: 'Steph', age: 17},
    ]
  })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi i'm a react app</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person
          name= {this.state.persons[0].name}
          age={this.state.persons[0].age}/>
          <Person
            name= {this.state.persons[1].name}
            age={this.state.persons[1].age}/>

            <Person
              name= {this.state.persons[2].name}
              age={this.state.persons[2].age}/>

          <Person
            name="Manu"
            age="30"
            click={this.switchNameHandler}>My hobbies are ....</Person>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
