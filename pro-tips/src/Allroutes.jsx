import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Form from './components/Form/Form';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registration' element={<Form />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  );
};

export default AllRoutes