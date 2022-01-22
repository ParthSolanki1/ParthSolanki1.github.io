import React from "react"
import "./About.css"
import about from "../../images/about.jpeg"
import resume from "../../images/resume_2022.pdf"

function About() {
    return (
        <section class="about" id="about">
            <div class="content">
            <div class="title"><span>About Me</span></div>
            <div class="about-details">
                <div class="left">
                <img src={about} alt="Portfolio"/>
                </div>
                <div class="right">
                <div class="topic">Developing Innovative Software Is My Passion</div>
                <p>Hey there! I'm Parth, a 4th year student at the University of Toronto specializing in Software Enginnering. As a child, I've always had an affinity towards math and technology (that might've been because I was bad at all the other subjects), which lead me to pursue a career in the CS field as it's a perfect combination of both! I have gained a lot of experience in web developement, application programming, and data science through various internships, projects, and course work which I am really excited to bring into the work force! Other than programming, My hobbies include anything related to basketball and gaming.</p>
                <div class="button">
                    <button class="button-1" onClick={() => {window.open(resume, '_blank').focus()}}>Resume</button>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default About;