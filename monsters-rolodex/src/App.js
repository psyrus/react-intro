import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      searchString: '',
      monsters: [],
    };

    console.log('Constructor completed');
  }

  //TODO: I don't understand why this is running twice! It logs two times to the console on each render
  componentDidMount() {
    console.log('App Component Mounted');
    // If you need to make an api request that must complete before the component originally renders, use this
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { apiMonsters: users, monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return {
        searchString: event.target.value.toLocaleLowerCase(),
      };
    });
  };

  render() {
    console.log('Render began');
    const filteredMonsters = this.state.monsters.filter((m) => {
      return m.name
        .toLowerCase()
        .replace(' ', '')
        .includes(this.state.searchString);
    });
    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolladex</h1>
        <SearchBox
          className='search-box'
          placeholder='Search Monsters'
          onChange={this.onSearchChange}
        />
        <CardList content={filteredMonsters} />
      </div>
    );
  }
}

export default App;
