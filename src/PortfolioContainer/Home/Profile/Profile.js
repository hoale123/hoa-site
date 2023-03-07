import React from 'react'
// import Typical from 'react-typical'
import "./Profile.css"

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
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
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Hoa</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        {/* <h1>
                            {" "}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Passionate Dev 🔥 🔥 ",
                                1000,
                                "Full Stack Developer 💻💻",
                                1000,
                                "React and Ruby on rails Dev 🧑‍💻 🧑‍💻",
                                1000,
                            ]}
                            />
                        </h1> */}
                        <span className='profile-role-tagline'>
                        Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    {/* <button className='btn primary-btn'>
                        {" "}
                        Hire Me {" "}
                    </button> */}
                    <a href='Hoa-Resume.pdf' download="Hoa Le.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
