import React from 'react';
import './Menu.css';
import 'font-awesome/css/font-awesome.min.css';

export default props =>
    <aside className='Menu'>
        <ul>
            <a href="/">
                <li>
                    <i className='fa fa-home'></i>
                      Home
                </li>
            </a>
            <a href="#users">
                <li>
                    <i className="fa fa-user"></i>
                     Users
                </li>
            </a>
        </ul>
    </aside>