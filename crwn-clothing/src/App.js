import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Admin from './routes/admin/admin.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='admin' element={<Admin />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
