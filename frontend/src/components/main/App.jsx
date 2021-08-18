import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Routes from './Routes';

function App(props){
    return(
        <HashRouter>
        <div className='App'>
            <Routes />
        </div>
        </HashRouter>
    );
}

export default App;