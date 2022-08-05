import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'MyFirstName', lastName: 'MyLastName' },
      company: 'ZTM',
    };
  }

  getRandomName() {
    let names = ['James May', 'Matt Richardson', 'Jim Jefferies'];
    let currentName = `${this.state.name.firstName} ${this.state.name.lastName}`;
    let newName, nameIndex;
    do {
      nameIndex = Math.floor(Math.random() * names.length);
      newName = names[nameIndex];
    } while (newName === currentName);

    this.setState(
      // Set state main function
      (state, props) => {
        return {
          name: {
            firstName: newName.split(' ')[0],
            lastName: newName.split(' ')[1],
          },
          nameChanged: true,
        };
      },
      // callback
      () => {
        console.log(this.state.name);
      }
    );
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}
          </p>
          <button onClick={() => this.getRandomName()}>
            Change Name Again
          </button>
        </header>
      </div>
    );
  }
}

export default App;
