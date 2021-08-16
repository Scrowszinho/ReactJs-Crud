import React from 'react';
import './Main.css';
import Menu from './menu/Menu';

export default props =>
    <div className='MainContainer'>
        <Menu {...props} />
        <main className='Content'>
            <div>
                {props.children}
            </div>
        </main>
    </div>
