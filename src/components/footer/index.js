import React, { Component } from 'react';
import { faInstagram, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css'


export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-icon'>
                    <a href='https://www.linkedin.com/in/felipegabrielamado/'> <FontAwesomeIcon icon={faLinkedin} /> </a>
                </div>

                <div className='footer-icon'>
                    <a href='https://github.com/FelipeGabrielAmado'> <FontAwesomeIcon icon={faGithub} /> </a>
                </div>

                <div className='footer-icon'>
                    <a href='https://www.instagram.com/felipeeamado/'> <FontAwesomeIcon icon={faInstagram} /> </a>
                </div>

                <div className='footer-icon'>
                    <a href='https://www.youtube.com/user/felipegabrielamado'> <FontAwesomeIcon icon={faYoutube} /> </a>
                </div>
            </div>
        );
    }
}