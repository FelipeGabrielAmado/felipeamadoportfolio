import React, { Component } from 'react';

import { faInstagram, faTwitter, faYoutube, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css'
import './responsive.css'

import api from '../../services/api'


export default class Contact extends Component {
    render() {
        return (
            <div className='contact-page'>
                <div className='contact-form'>
                    <h2>Contact me</h2>
                    <div className='contact-content'>
                        <div className='left-form'>
                            <img src='../../../programmer.png' alt='Programmer Vector' />
                        </div>
                    </div>
                </div>

                <div className='social-medias'>
                    <div className='contact-icon'>
                        <a href='https://api.whatsapp.com/send?phone=5549991784645'> <FontAwesomeIcon icon={faWhatsapp} /> </a>
                    </div>

                    <div className='contact-icon'>
                        <a href='https://www.linkedin.com/in/felipegabrielamado/'> <FontAwesomeIcon icon={faLinkedin} /> </a>
                    </div>

                    <div className='contact-icon'>
                        <a href='https://github.com/FelipeGabrielAmado'> <FontAwesomeIcon icon={faGithub} /> </a>
                    </div>

                    <div className='contact-icon'>
                        <a href='https://www.instagram.com/felipeeamado/'> <FontAwesomeIcon icon={faInstagram} /> </a>
                    </div>

                    <div className='contact-icon'>
                        <a href='https://twitter.com/felipeeamado'> <FontAwesomeIcon icon={faTwitter} /> </a>
                    </div>
                </div>
            </div>
        );
    }
}