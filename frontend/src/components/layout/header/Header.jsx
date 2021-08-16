import React from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../../assets/img/react.png';
export default props =>
        <header className='Header'>
                <div className='HeaderLogo'>
                        <img src={logo} alt='Logo' />
                </div>
                <div className='HeaderTitle'>
                        <h1><i className='fa fa-home'></i> {props.title}</h1>
                        <h2>{props.subTitle}</h2>
                </div>
        </header>