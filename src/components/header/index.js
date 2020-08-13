import React, { Component } from 'react';

import './styles.css'


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <a href='/'>
                    <header className='main-header'>
                        <h1>Felipe Amado</h1>
                    </header>
                </a>
                <header className='header-items'>
                    <ul>
                        <li className={(window.location.pathname === '/') ? "active-item" : ""}> <a href='/'> home </a> </li>
                        <li className={(window.location.pathname === '/about') ? "active-item" : ""}> <a href='/about'> about me </a></li> 
                        <li className={(window.location.pathname === '/jobs') ? "active-item" : ""}> <a href='/jobs'> my jobs </a></li>    
                        <li className={(window.location.pathname === '/contact') ? "active-item" : ""}> <a href='/contact'> contact </a></li>   
                    </ul>
                </header>
            </div>
        );
    }
}