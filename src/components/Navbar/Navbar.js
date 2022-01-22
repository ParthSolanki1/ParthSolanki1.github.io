import "./navbar.css"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import resume from "../../images/resume_2022.pdf"

library.add(fab, fas)

function Navbar() {
    const [navbarScroll, setNavbarScroll] = useState(false)
    const [open, setOpen] = useState(false)

    const listenScrollEvent = e => {
        if(window.scrollY > 20) {
            setNavbarScroll(true)
        } else {
            setNavbarScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return(
    <nav className={navbarScroll ? "sticky" : ""}>
        <div className={`navbar ${open ? "active" : ""}`}>
            <div class="logo"><span class="logo-img"></span><a href="#">Parth</a></div>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <div className={`cancel-btn ${open ? "show" : "hide"}`} onClick={() => {setOpen(!open)}}>
                    <FontAwesomeIcon icon={["fas", "times"]} />
                </div>
            </ul>
            <div class="media-icons">
                <a href="https://github.com/ParthSolanki1" target={"_blank"}><FontAwesomeIcon icon={["fab", "github"]} /></a>
                <a href="https://www.linkedin.com/in/parth-solankii/" target={"_blank"}><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a href="mailto: parth.solanki@mail.utoronto.ca" target={"_blank"}><FontAwesomeIcon icon={["fas", "envelope"]} /></a>
                <button class="button-1" onClick={() => {window.open(resume, '_blank').focus()}}>Resume</button>
            </div>
        </div>
        <div className={`menu-btn ${open ? "hide" : "show"}`} onClick={() => {setOpen(!open)}}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
        </div>
    </nav>
  );
}

export default Navbar;

