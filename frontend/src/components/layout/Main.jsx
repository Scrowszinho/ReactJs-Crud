import React from 'react';
import './Main.css';
import Menu from './menu/Menu';
import Header from '../layout/header/Header';

export default props =>
    <React.Fragment>
    <Header {...props} />
    <div className='MainContainer'>
        <Menu />
        <main className='Content'>
            <div>
                {props.children}
            </div>
        </main>
    </div>
    </React.Fragment>
