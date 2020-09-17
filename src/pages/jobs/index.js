import React, { Component } from 'react';

import './styles.css'
import './responsive.css'

export default class Jobs extends Component {
    render() {
        return (
            <div className='job-page'>
                <div className='job-item-left'>
                    <div className='job-status-done'>Finished</div>
                    <div className='job-content'>
                        <img src='../../../alcatraz.png' alt='Alcatraz Thumbnail' />
                        <div className='job-text'>
                            <h2>Alcatraz Movie Hub</h2>
                            <p><b>Front end:&#160;</b> ReactJS</p>
                            <p><b>Back end:&#160;</b> NodeJS</p>
                            <p><b>Database:&#160;</b> PostgreSQL</p>
                            <p><b>Motivation:&#160;</b> I started this project to learn how to code using ReactJS and Node as backend. This is my first project doing full stack by my self.</p>
                            <a href='https://alcatraz-front.herokuapp.com/'> <button>See project</button> </a>
                        </div>
                    </div>
                </div>

                <div className='job-item-left'>
                    <div className='job-status-progress'>In progress</div>
                    <div className='job-content'>
                        <img src='../../../portfolio.png' alt='Portfolio Thumbnail' />
                        <div className='job-text'>
                            <h2>Alcatraz Movie Hub</h2>
                            <p><b>Front end:&#160;</b> ReactJS</p>
                            <p><b>Back end:&#160;</b> NodeJS</p>
                            <p><b>Database:&#160;</b> PostgreSQL</p>
                            <p><b>Motivation:&#160;</b> This project was focused on show my portfolio and create network.</p>
                            <a href='https://alcatraz-front.herokuapp.com/'> <button>See project</button> </a>
                        </div>
                    </div>
                </div>

                <div className='job-item-left'>
                    <div className='job-status-designing'>Designing</div>
                    <div className='job-content'>
                        <img src='../../../conceptron.png' alt='Conceptron Thumbnail' />
                        <div className='job-text'>
                            <h2>Conceptron - Final Paper</h2>
                            <p><b>Front end:&#160;</b> Django </p>
                            <p><b>Back end:&#160;</b> Python</p>
                            <p><b>Database:&#160;</b> PostgreSQL</p>
                            <p><b>Motivation:&#160;</b> This is my final paper project developing together with &#160;<a href='https://github.com/jordanalexander'> Jordan</a>.</p>
                            <a href='https://xd.adobe.com/view/d9f9250d-e74b-4d8a-821e-4569528df154-8caa/'> <button>See project</button> </a>
                        </div>
                    </div>
                </div>

                <div className='job-item-left'>
                    <div className='job-status-designing'>Designing</div>
                    <div className='job-content'>
                        <img src='../../../ogym.png' alt='Conceptron Thumbnail' />
                        <div className='job-text'>
                            <h2>OGym - Gym solution</h2>
                            <p><b>Front end:&#160;</b> ReactJS </p>
                            <p><b>Back end:&#160;</b> NodeJS</p>
                            <p><b>Database:&#160;</b> PostgreSQL</p>
                            <p><b>Motivation:&#160;</b> This project is an ideia for gyms solution during pandemy.</p>
                            <a href='https://xd.adobe.com/view/5739ba56-1a1f-4ef1-9490-3673327d16f5-026a/'> <button>See project</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}