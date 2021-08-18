import React from 'react';
import './Menu.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
export default props =>
    <aside className='Menu'>
        <ul>
            <Link to="/">
                <li>
                    <i className='fa fa-home'></i>
                      Home
                </li>
            </Link>
            <Link to="users">
                <li>
                    <i className="fa fa-users"></i> 
                     Users
                </li>
            </Link>
        </ul>
    </aside>