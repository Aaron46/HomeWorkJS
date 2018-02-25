import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student.js';

const students = [
  {
    name: "Bob",
    score: [98, 89, 78],
    id: 1
  },
  {
    name: "Jack",
    score: [98, 89, 78],
    id: 2
  },
  {
    name: "Joe",
    score: [98, 89, 78],
    id: 3
  }
]

class App extends Component {
  render() {
    const theStudents = students.map(student => <Student key={student.id} student={student} />);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{theStudents}</ul>

        {/* <Student student={students[0]} />
        <Student student={students[1]} />
        <Student student={students[2]} /> */}
        {/* <Student name="Bob" scores={[98, 78, 68]} />
        <Student name="Jill" scores={[98, 78, 68]} /> */}
      </div>
    );
  }
}

export default App;
