import React from 'react';
import style from './Home.module.css';
import NavBar from '../navBar/NavBar';
import CV from '../../assets/Marcos-Arjona-CV-English.pdf';
import DownloadIcon from '../../assets/download-icon.png';

function Home() {
    return (
        <div className={style.home} id="home">
            <NavBar />
            <div>
                <h1>Hello!</h1>
                <span>I'm Marcos</span>
                <h1>Full Stack</h1>
                <h1>Web Developer</h1>
            </div>
            <a href={CV} download>
                <img src={DownloadIcon} alt="" />
                    Download CV
                </a>
        </div>
    )
}

export default Home
