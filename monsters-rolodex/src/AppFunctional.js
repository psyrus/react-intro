import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const AppFunctional = () => {
  //console.log('Start render');
  const [searchString, updateSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(
    /* This code will run any time one of the variables passed in the array below (second param) changes. This will prevent the code from constantly re-rendering if we didn't use this code - because originally the copy of the monsters array from the API has a different address in memory each time which meant that the functional component would see it as updated each time and go into an infinite loop */
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          setMonsters(users);
        });
      //console.log('fetch effect is firing');
    },
    /* The content of the array will determine which are the dependencies that will cause useEffect to trigger. Passing it an empty array will mean this is only ever triggered once on the initial render */
    []
  );

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((m) => {
      return m.name.toLowerCase().replace(' ', '').includes(searchString);
    });

    setFilteredMonsters(newFilteredMonsters);
    //console.log('set monsters effect is firing');
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const searchStringParsed = event.target.value.toLocaleLowerCase();
    updateSearchString(searchStringParsed);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolladex</h1>
      <SearchBox
        className='search-box'
        placeholder='Search Monsters'
        onChange={onSearchChange}
      />
      <CardList content={filteredMonsters} />
    </div>
  );
};

export default AppFunctional;
