import React, { Component } from 'react';

import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css'


export default class Main extends Component {
    render() {
        return (
            <div>
                <div className='home-page'>
                    <div className='name'><b>Felipe</b> Gabriel <b>Amado</b></div>
                    <div className='description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus orci non massa dapibus, sagittis volutpat ante sagittis. Suspendisse lectus dolor, convallis quis convallis id, pharetra a purus. Curabitur rhoncus venenatis quam a fermentum. Pellentesque nec purus at mi dignissim scelerisque at ac leo. Maecenas in dictum augue. Aenean sed tempor augue. Ut nec turpis vitae ex efficitur eleifend id at leo. Nullam finibus congue aliquam. Quisque egestas massa non ex efficitur dictum. Curabitur imperdiet sed arcu vel tristique. Cras mattis, purus in placerat iaculis, lacus nisl efficitur orci, quis semper libero massa id magna. </div>

                    <div className='image-background'>
                        <img src='../../../18084.jpg' />
                    </div >
                </div>

                <div className='cards'>

                    <div className='buttons'>
                        <div className='about-me-card'>
                            <a><FontAwesomeIcon icon={faUser} /> <p>About me</p></a>
                        </div>

                        <div className='jobs-card'>
                            <a><FontAwesomeIcon icon={faBriefcase} /> <p>Jobs</p></a>
                        </div>

                        <div className='contact-card'>
                            <a><FontAwesomeIcon icon={faEnvelope} /> <p>Contact</p></a>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}