import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Type from './components/Type';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
import GetBooks from './components/GetBooks';
import BuyBooks from './components/BuyBooks';
import { AuthProvider } from './components/AuthProvider';
import Profile from './components/Profile';
import RequireAuth from './components/RequireAuth';
import Orders from './components/Orders';
import Admins from './components/Admins';
import RequireAdminAuth from './components/RequireAdminAuth';
import Page404 from './components/Page404';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import {bookContext} from './components/BookProvider';
import { useState } from 'react';

function App() {
  const [books,setBooks]=useState([{}]);
  return (
    <div className="App">
      <AuthProvider>
        <bookContext.Provider value={{books,setBooks}}>
      <Routes>
      <Route path='/' element={<Type/>}/>
      <Route path='users' element={<Users type="User"/>}>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login type='users'/>}/>
        <Route path='getBook' element={<GetBooks type='users'/>}/>
        <Route path='buyBook/:bookId' element={<BuyBooks/>}/>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path='orders' element={<RequireAuth><Orders/></RequireAuth>}/>
      </Route>
      <Route path='admins' element={<Admins type="Admin"/>}>
        <Route path='login' element={<Login type='admins'/>}/>
        <Route path='addBook' element={<AddBook/>}/>
        <Route path='updateBook' element={<UpdateBook/>}/>
        <Route path='getBook' element={<GetBooks type='admins'/>}/>
        <Route path='profile' element={<RequireAdminAuth><Profile/></RequireAdminAuth>}/>
      </Route>
      <Route path='*' element={Page404}/>
      </Routes>
      </bookContext.Provider>
    </AuthProvider>
    </div>
  );
}

export default App;
