import React, { Component } from 'react';

import './styles.css'
import './responsive.css'


export default class Main extends Component {
    render() {
        return (
            <>
                <div className='home-page'>
                    <div className='name'><b>Felipe</b> Gabriel <b>Amado</b></div>
                    <div className='description'> My name is <b>Felipe Gabriel Amado</b>, I'm a <b>21 years old programmer</b> that likes to create beautiful things. When I was 5 years old my dad died, so my brother had to work and I had to be alone at my house, after this, I started playing video games, thats when I found a <b>love for technology</b>. In 2021 I will finish <b>Computer Science</b> course and after that I really hope that I can <b>travel</b> abroad and <b>meet new people</b> and <b>new cultures</b>. </div>
                    <a href='/about'>  <div className='home-button'>Know more about me</div></a>
                </div>

                <div className='jobs-main'>
                    <h2>Jobs</h2>
                    <div className='jobs-images'>
                        <a href='https://alcatraz-front.herokuapp.com/'>
                            <img src='../../../alcatraz.png' alt='Alcatraz Thumbnail' />
                        </a>
                        <a href='/'>
                            <img src='../../../portfolio.png' alt='Portfolio Thumbnail' />
                        </a>
                        <a href='https://xd.adobe.com/view/d9f9250d-e74b-4d8a-821e-4569528df154-8caa/'>
                            <img src='../../../conceptron.png' alt='Conceptron Thumbnail' />
                        </a>
                        <a href='https://xd.adobe.com/view/5739ba56-1a1f-4ef1-9490-3673327d16f5-026a/'>
                            <img src='../../../ogym.png' alt='OGym Thumbnail' />
                        </a>
                    </div>
                </div>
            </>
        )
    }
}