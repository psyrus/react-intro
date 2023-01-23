import { Route, Routes } from 'react-router-dom';
import Admin from './routes/admin/admin.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getCategoriesStart } from './store/categories/category.action';
import { checkUserSession } from './store/user/user.action';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  useEffect(() => {
    dispatch(getCategoriesStart());
  });

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
