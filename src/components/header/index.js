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
                <header className='sub-header'>
                    <ul>
                        <li> <a> home </a> </li>
                        <li> <a> about me </a></li> 
                        <li> <a> my jobs </a></li>    
                        <li> <a> contact </a></li>   
                    </ul>
                </header>
            </div>
        );
    }
}