import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Form from './components/Form/Form';
import Navbar from './components/Navbar';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Form />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
