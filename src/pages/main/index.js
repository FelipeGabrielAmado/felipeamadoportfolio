import React, { Component } from 'react';

import { faBriefcase, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css'


export default class Main extends Component {
    render() {
        return (
            <div>
                <div className='home-page'>
                    <div className='name'><b>Felipe</b> Gabriel <b>Amado</b></div>
                    <div className='description'> My name is <b>Felipe Gabriel Amado</b>, I'm a <b>21 years old programmer</b> that likes to create beautiful things. When I was 5 years old my dad died, so my brother had to work and I had to be alone at my house, after this, I started playing video games, thats when I found a <b>love for technology</b>. In 2021 I will finish <b>Computer Science</b> course and after that I really hope that I can <b>travel</b> abroad and <b>meet new people</b> and <b>new cultures</b>. </div>

                    <div className='image-background'>
                        <img src='../../../18084.jpg' />
                    </div >
                </div>

                <div className='cards'>

                    <div className='buttons'>
                        <a href='/about'>
                            <div className='about-me-card'>
                                <FontAwesomeIcon icon={faUser} /> <p>About me</p>
                            </div>
                        </a>

                        <a href='/jobs'>
                            <div className='jobs-card'>
                                <FontAwesomeIcon icon={faBriefcase} /> <p>Jobs</p>
                            </div>
                        </a>

                        <a href='/contact'>
                            <div className='contact-card'>
                                <FontAwesomeIcon icon={faEnvelope} /> <p>Contact</p>
                            </div>
                        </a>
                    </div>

                </div>

            </div >
        )
    }
}