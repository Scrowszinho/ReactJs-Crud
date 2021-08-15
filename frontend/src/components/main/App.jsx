import React from 'react';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Menu from '../layout/Menu';
import './App.css';

function App(props){
    return(
        <div className='App'>
             <Main title={'Home'} subTitle={'This is a project home'} />
             <Menu />
             <Footer />
        </div>
    );
}

export default App;