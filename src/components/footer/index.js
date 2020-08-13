import React, { Component } from 'react';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css'


export default class Header extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-icon'>
                    <a href='https://github.com/FelipeGabrielAmado'> <FontAwesomeIcon icon={faGithub} /> </a>
                </div>

                <div className='footer-icon'>
                    <a href='https://www.instagram.com/felipeeamado/'> <FontAwesomeIcon icon={faInstagram} /> </a>
                </div>

                <div className='footer-icon'>
                    <a href='https://www.facebook.com/felipe.amadosmo'> <FontAwesomeIcon icon={faFacebookF} /> </a>
                </div>

                <div className='footer-icon'>
                    <a href='https://twitter.com/felipeeamado'> <FontAwesomeIcon icon={faTwitter} /> </a>
                </div>
                
                <div className='footer-icon'>
                    <a href='https://www.youtube.com/user/felipegabrielamado'> <FontAwesomeIcon icon={faYoutube} /> </a>
                </div>
            </div>
        );
    }
}