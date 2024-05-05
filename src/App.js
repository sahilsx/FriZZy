
import React from 'react';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import GetAllPosts from './post components/getallposts'
import Loader from './components/loader';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<GetAllPosts/>} />
       
        </Routes>

       
      </BrowserRouter>
    </>
  );
};

export default App;