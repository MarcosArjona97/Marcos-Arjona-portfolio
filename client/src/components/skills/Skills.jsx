import React from 'react';
import JS_Icon from '../../assets/javascript-icon.png';
import HTML_Icon from '../../assets/html-icon.png';
import CSS_Icon from '../../assets/css-icon.png';
import Redux_Icon from '../../assets/redux-icon.png';
import Postgres_Icon from '../../assets/postgresql.png';
import React_Icon from '../../assets/react-icon.png';
import Node_Icon from '../../assets/node-icon.png';
import Sequelize_Icon from '../../assets/sequelize-icon.png';
import Git_Icon from '../../assets/git-icon.png';
import style from './Skills.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {

    AOS.init();

    return (
        <div className={style.skillsSection}>
            <section id="skills">
                <h1>
                    Skills
                </h1>
                <hr />
                <div className={style.iconsContainer}>
                    <span data-aos="flip-left" data-aos-duration="600"><img src={JS_Icon} alt="" ></img>
                        Javascript
                    </span>
                    <span data-aos="flip-left" data-aos-duration="800"><img src={HTML_Icon} alt="" ></img>
                        HTML5
                    </span>
                    <span data-aos="flip-left" data-aos-duration="1000"><img src={CSS_Icon} alt="" ></img>
                        CSS3
                    </span>
                    <span data-aos="flip-left" data-aos-duration="1200"><img src={Redux_Icon} alt="" ></img>
                        Redux
                    </span>
                    <span data-aos="flip-left" data-aos-duration="1400"><img src={Postgres_Icon} alt="" ></img>
                        PostgreSQL
                    </span>
                    <span data-aos="flip-left" data-aos-duration="1600"><img src={React_Icon} alt="" ></img>
                        React
                    </span>
                    <span data-aos="flip-left" data-aos-duration="1800"><img src={Node_Icon} alt="" ></img>
                        Node
                    </span> 
                    <span data-aos="flip-left" data-aos-duration="2000"><img src={Sequelize_Icon} alt="" ></img>
                        Sequelize
                    </span>
                    <span data-aos="flip-left" data-aos-duration="2200"><img src={Git_Icon} alt="" ></img>
                        GIT
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Skills
