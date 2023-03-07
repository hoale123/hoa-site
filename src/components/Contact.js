import React from 'react';
import { email } from '../data';

import { Fade } from "react-awesome-reveal";

export default function Articles() {
    return (
        <div className="contact container-fluid section" name="contact">
            <Fade bottom>
                <h2 className="section-header">CONTACT</h2>
            </Fade>
            <Fade bottom>
                <p>Contact me at <a href={"mailto:" + email} className="card-link">{email}</a> for collaboration or any inquiry.</p>
            </Fade>
            <div className='colz'>
                    <div className='colz-icon'>
                    Linkedin
                    <a href='https://www.linkedin.com/in/hoa-le/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    Github
                    <a href='https://github.com/hoale123'>
                        <i className='fa fa-github'></i>
                    </a>
                    Medium
                    <a href='https://medium.com/@hoale8594'>
                        <i className='fa fa-medium'></i>
                    </a>                    
                    </div>
                </div>
        </div>
    )
}
