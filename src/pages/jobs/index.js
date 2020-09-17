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
                            <p><b>Front end:</b> ReactJS</p>
                            <p><b>Back end:</b> Node</p>
                            <p><b>Database:</b> PostgreSQL</p>
                            <p><b>Motivation:</b> I started this project to learn how to code using ReactJS and Node as backend. This is my first project doing full stack by my self.</p>
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
                            <p><b>Front end:</b> ReactJS</p>
                            <p><b>Back end:</b> Node</p>
                            <p><b>Database:</b> PostgreSQL</p>
                            <p><b>Motivation:</b> This project was focused on show my portfolio and create network.</p>
                            <a href='https://alcatraz-front.herokuapp.com/'> <button>See project</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}