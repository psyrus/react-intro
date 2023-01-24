import './App.css';
import { useState, useEffect, ChangeEvent } from 'react';
import CardListFunctional from './components/card-list/card-list-functional.component';
import SearchBoxFunctionalTyped from './components/search-box/search-box-functional-typed.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const AppFunctionalTyped = () => {
  console.log('Start render');
  const [searchString, updateSearchString] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('');

  useEffect(
    /* This code will run any time one of the variables passed in the array below (second param) changes. This will prevent the code from constantly re-rendering if we didn't use this code - because originally the copy of the monsters array from the API has a different address in memory each time which meant that the functional component would see it as updated each time and go into an infinite loop */
    () => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
        setMonsters(users);
      }
      fetchUsers();
      console.log('fetch effect is firing');
    },
    /* The content of the array will determine which are the dependencies that will cause useEffect to trigger. Passing it an empty array will mean this is only ever triggered once on the initial render */
    []
  );

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((m) => {
      return m.name.toLowerCase().replace(' ', '').includes(searchString);
    });

    setFilteredMonsters(newFilteredMonsters);
    console.log('set monsters effect is firing');
  }, [monsters, searchString]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchStringParsed = event.target.value.toLocaleLowerCase();
    updateSearchString(searchStringParsed);
  };
  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTitleParsed = event.target.value;
    setTitle(searchTitleParsed);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBoxFunctionalTyped
        className='search-box'
        placeholder='Search Monsters'
        onChangeHandler={onSearchChange}
      />
      <br />
      <SearchBoxFunctionalTyped
        className='title-box'
        placeholder='Set Title'
        onChangeHandler={onTitleChange}
      />
      <CardListFunctional content={filteredMonsters} />
    </div>
  );
};

export default AppFunctionalTyped;
