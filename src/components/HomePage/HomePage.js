import "./HomePage.css"
import React from "react"
import headshot from "../../images/headshot.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)

function HomePage() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <div className="text-one">Hello,</div>
                    <div className="text-two">I'm Parth Solanki</div>
                    <div className="text-three">Software Enginner</div>
                    <div className="text-four">Fourth Year CS Student @ UofT</div>
                    <div className="text-four">(Huge Toronto Raptors Fan)</div>
                    <div class="media-icons">
                        <a href="https://github.com/ParthSolanki1" target={"_blank"}><FontAwesomeIcon icon={["fab", "github"]} /></a>
                        <a href="https://www.linkedin.com/in/parth-solankii/" target={"_blank"}><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                        <a href="mailto: parth.solanki@mail.utoronto.ca" target={"_blank"}><FontAwesomeIcon icon={["fas", "envelope"]} /></a>
                        <button class="button-1">Resume</button>
                    </div>
                </div>
                <img src={headshot} alt="Headshot" className="headshot"/>
            </div>
        </section>
    );
}

export default HomePage;