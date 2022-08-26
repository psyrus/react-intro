import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home></Home>}></Route>
        <Route path='auth' element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
