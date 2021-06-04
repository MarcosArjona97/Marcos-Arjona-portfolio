import React, { useState, useEffect } from 'react';
import './NavBar.css';
import MenuIcon from '../../assets/menu-white.png';
import MarcosLogo from '../../assets/Marcos-logo.png';

function NavBar() {
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);
    const [open, setOpen] = useState(false);

    const height = window.innerHeight;

    function changeNavBar() {
        if (window.scrollY > height - 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    function showMenu() {
        if (window.innerWidth <= 960) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }

    const navBar = document.getElementById("navBar");

    useEffect(() => {
        showMenu()
    }, [])

    window.addEventListener("scroll", changeNavBar);
    window.addEventListener("resize", showMenu);


    return (
        <nav id="navBar" className={scroll ? "navBar active" : "navBar"}>
            <a href="#home">
                <img src={MarcosLogo} id="logo" alt="" />
            </a>
            {menu ?
                <>
                    <img src={MenuIcon} alt="" onClick={() => setOpen(!open)} id="menuIcon" className="menuIcon" />
                    {open ?
                        navBar.classList.add("open")
                        :
                        navBar.classList.remove("open")
                    }
                    <ul>
                        <a href="#home">HOME</a>
                        <a href="#skills">SKILLS</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#footer">CONTACT ME</a>
                    </ul>
                </>
                :
                <ul>
                    <a href="#home">HOME</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#footer">CONTACT ME</a>
                </ul>
            }
        </nav>
    )
}

export default NavBar
