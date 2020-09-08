import React, { Component } from 'react';

import { faInstagram, faTwitter, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css'

import api from '../../services/api'


export default class Contact extends Component {
    state = {
        name: '',
        message: '',
        email: ''
    }

    handleName = event => {
        this.setState({ name: event.target.value });
    }

    handleMessage = event => {
        this.setState({ message: event.target.value });
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { name, message, email } = this.state;

        const response = api.post(`message`, { name, message, email })
            .then(res => {
                console.log(response);
                console.log(res.data);
                alert(res.data.message)
            })

    }

    render() {
        return (
            <div className='contact-page'>
                <div className='contact-form'>
                    <h2>Contact me</h2>
                    <div className='contact-content'>
                        <div className='left-form'>
                            <img src='../../../programmer.png' alt='Programmer Vector' />
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Full name:
                    <input type="text" name="name" onChange={this.handleName} placeholder='Please enter your name' />
                            </label>

                            <label>
                                Email:
                    <input type="text" name="name" onChange={this.handleEmail} placeholder='Enter your email to contact' />
                            </label>

                            <label>
                                Message:
                    <textarea name="name" onChange={this.handleMessage} placeholder='Enter your message' />
                            </label>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

                <div className='social-medias'>
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
                        <a href='https://www.youtube.com/user/felipegabrielamado'> <FontAwesomeIcon icon={faYoutube} /> </a>
                    </div>

                    <div className='contact-icon'>
                        <a href='https://twitter.com/felipeeamado'> <FontAwesomeIcon icon={faTwitter} /> </a>
                    </div>
                </div>
            </div>
        );
    }
}