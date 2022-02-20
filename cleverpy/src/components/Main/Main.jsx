import React from "react";
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import Login from '../Login/Login';
import {Route, Routes } from 'react-router-dom'//Para uso de todas las rutas

const Main = () => {
  return <main>
    <Routes>
          <Route path="/" element ={<Home/>} />

          <Route path="/login" element ={<Login/>} />  
    </Routes>  
    </main>;
};

export default Main;