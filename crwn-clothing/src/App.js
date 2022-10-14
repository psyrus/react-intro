import { Route, Routes } from 'react-router-dom';
import Admin from './routes/admin/admin.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';
import { createUserDocumentfromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { refreshCategories } from './store/categories/category.action';
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      let dbProperties = {};
      if (user) {
        dbProperties = await createUserDocumentfromAuth(user);
        user = { ...user, ...dbProperties }
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  });

  useEffect(() => {
    const callDispatchAsync = async() => {
      const categoryAction = await refreshCategories();
      dispatch(categoryAction)
    }
    callDispatchAsync();
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
