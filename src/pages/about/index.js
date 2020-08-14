import React, { Component } from 'react';

import './styles.css'



export default class About extends Component {
    render() {
        return (
            <div className='about-page'>
                <div className='about-content'>
                    <div className='about'>
                        <img src='../../../felipe.jpg' />
                        <div className='about-text'>
                            <h2>About me</h2>
                            <p>My name is <b>Felipe Gabriel Amado</b>, I'm a <b>21 years old programmer</b> that likes to create beautiful things. When I was 5 years old my dad died, so my brother had to work and I had to be alone at my house, after this, I started playing video games, thats when I found a <b>love for technology</b>. In 2021 I will finish <b>Computer Science</b> course and after that I really hope that I can <b>travel</b> abroad and <b>meet new people</b> and <b>new cultures</b>.</p>
                        </div>
                    </div>

                    <div className='experience'>
                        <h2> Experience </h2>
                        <p> I started working with Front End <b>3 years ago</b>, when I started working at <b>DBlinks</b>. In this time I faced many technologies as <b>React</b>, <b>Node</b>, <b>Flutter</b>, <b>Postgresql</b>, <b>MongoDB</b>, and many others related to <b>web</b>;</p>
                        <p> At DBlinks I also worked web as <b>Web Designer</b> and managed <b>Amazon Web Service Server</b>;</p>
                        <p> When I started <b>Computer Science</b> course I realized that I love <b>web technologies</b>, so I started studying this all by my self.</p>
                    </div>

                    <div className='dreams'>
                        <h2> Dreams </h2>
                        <p>My <b>biggest dream</b> is to <b>travel abroad</b> with <b>my girlfriend</b>. We're together wince we were <b>15 years old</b> and we've always dreamed about <b>traveling around the world</b>;</p>
                        <p>I want to become a <b>Full Stack Developer</b> and expand horizons</p>
                    </div>

                    <div className='image-background'>
                        <img src='../../../2402.png' alt='background' />
                    </div >
                </div>
            </div>
        );
    }
}