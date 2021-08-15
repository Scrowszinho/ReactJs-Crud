import React from 'react';
import Header from './Header';
import './Main.css';

export default props => 
    <React.Fragment>
        <Header {...props} />
        <main className='Content'>
            Main
        </main>
    </React.Fragment>