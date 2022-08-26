import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Parse from 'parse/dist/parse.min.js';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Calendar from './Components/Calendar/Calendar';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'OGzOz31Ts7X9j0lccLfsnwlgk9YzhhjVo7h5lYlL';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'yrr8d60NnCudeHp0k0y054oDwaNERzRy4VNCst5U';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route index element={<Home/>}/>
                        <Route exact path="/journal" element={<Journal/>}></Route>
                        <Route exact path="/calendar" element={<Calendar/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
