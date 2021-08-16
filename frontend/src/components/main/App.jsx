import React from 'react';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import Main from '../layout/Main';
import './App.css';

function App(props){
    return(
        <div className='App'>
            <Header title={'Home'} subTitle={'Test subtitle'}/>
            <Main>
                <h1>Welcome</h1>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Necessitatibus provident at nihil molestiae temporibus illum consectetur deleniti doloribus magni ex est rem,
                     reprehenderit doloremque, totam ipsum praesentium ut a voluptatibus.</p>
            </Main>
        </div>
    );
}

export default App;