import React from 'react';
import style from './Footer.module.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin-logo.png';
import Email from '../../assets/email.png';

function Footer() {
    return (
        <div className={style.footerContainer}>
            <section id="footer" className={style.footer}>
                <h5>CONTACT ME</h5>
                <div className={style.redes}>
                    <a href="https://github.com/MarcosArjona97">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/marcos-ezequiel-arjona/">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href="mailto:marcosarjonapsn@gmail.com">
                        <img src={Email} alt="" />
                    </a>
                </div>
                <p>2021 - MARCOS ARJONA</p>
            </section>
        </div>
    )
}

export default Footer
