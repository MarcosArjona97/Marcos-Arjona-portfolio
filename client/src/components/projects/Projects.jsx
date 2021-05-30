import React from 'react';
import style from './Projects.module.css';
import Video_1 from '../../videos/Tech-Store.mp4';
import Video_2 from '../../videos/UrGame.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {

    AOS.init();

    function showProjects () {

    }

    window.addEventListener("scroll", showProjects);

    return (
        <div className={style.projectsSection}>
            <section id="projects" className={style.projects}>
                <h1 data-aos="fade-up" data-aos-duration="1200">Projects</h1>
                <hr />
                <div data-aos="fade-right" data-aos-duration="1500" className={style.project_1}>
                    <video controls className={style.video_1}>
                        <source src={Video_1} type="video/mp4" />
                    </video>
                    <div className={style.p1_body}>
                        <h4 style={{ margin: "0px", color: "rgb(141, 205, 225)" }}>Tech-Store</h4>
                        <p>
                            A little project made for a technical interview. It shows a catalogue with some products and the user has the option to modify, create or delete them.
                            All of the products are stored in a SQL database.
                            <br />
                            <p></p>
                            <u>Technologies:</u> HTML5, CSS3, Javascript, React, Redux, Node.js, Express, PostgreSQL and Sequelize
                    </p>
                    </div>

                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className={style.project_2}>
                    <div className={style.p2_body}>
                        <h4 style={{ margin: "0px", color: "rgb(141, 205, 225)" }}>Ur-Game</h4>
                        <p>
                            Ur-Game it's a videogames database with more of 100 games extracted from an external API.
                            In the catalogue you can see all the games, included that ones created by you.
                            You can sort them by name or rating, use the searchbar to find your favorite o filter by genre.
                            On top right you have an option to create your own game.
                            <br />
                            <p></p>
                            <u>Technologies:</u> HTML5, CSS3, Javascript, React, Redux, Node.js, Express, PostgreSQL and Sequelize
                    </p>
                    </div>
                    <video controls className={style.video_2}>
                        <source src={Video_2} type="video/mp4" />
                    </video>
                </div>
            </section>
        </div>
    )
}

export default Projects
