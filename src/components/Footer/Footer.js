import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, fas)

function Footer() {
    return(
        <section className="footer" id="footer">
            <div className="content">
                <div className="socials">
                    <a href="https://github.com/ParthSolanki1" target={"_blank"}><FontAwesomeIcon icon={["fab", "github"]} /></a>
                    <a href="https://www.linkedin.com/in/parth-solankii/" target={"_blank"}><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                    <a href="mailto: parth.solanki@mail.utoronto.ca" target={"_blank"}><FontAwesomeIcon icon={["fas", "envelope"]} /></a>
                </div>
                <div className="message">
                    <div className="topic">Let's chat! </div>
                    <FontAwesomeIcon icon={["fas", "coffee"]}/>
                </div>
            </div>
        </section>
    );
}

export default Footer;