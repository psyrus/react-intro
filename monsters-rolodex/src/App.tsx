import { ChangeEvent, Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

type Monster = {
  id: string;
  name: string;
  email: string;
}

interface IProps {
}

interface IState {
  searchString: string;
  monsters: Monster[]
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      searchString: '',
      monsters: [],
    };

    console.log('Constructor completed');
  }
  

  //TODO: I don't understand why this is running twice! It logs two times to the console on each render
  componentDidMount() {
    console.log('App Component Mounted');


    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      this.setState(
        () => {
          return { apiMonsters: users, monsters: users, searchString: this.state.searchString };
        },
        () => {
          console.log(this.state);
        }
      );
    }

    fetchUsers();
    // If you need to make an api request that must complete before the component originally renders, use this
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("SOMETHING")
    this.setState(() => {
      return {
        searchString: event.target.value.toLocaleLowerCase(),
      };
    },
    () => {
      console.log(this.state);
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
