import React from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../../assets/img/react.png';
import { Link } from 'react-router-dom';
export default props =>
        <header className='Header'>
                <Link to='/'>
                <div className='HeaderLogo'>
                        <img src={logo} alt='Logo' />
                </div>
                </Link>
                <div className='HeaderTitle'>
                        <h1><i className={`fa fa-${props.logo}`}></i> {props.title}</h1>
                        <h2>{props.subTitle}</h2>
                </div>
        </header>