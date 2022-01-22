import React from "react";
import "./Myprojects.css"

function Myprojects() {
    return (
        <section class="projects" id="projects">
            <div class="content">
                <div class="title"><span>Projects</span></div>
                <div class="boxes">
                    <a class="box" href={"https://github.com/ParthSolanki1/HRez"} target={"_blank"}>
                        <div class="topic">HRez</div>
                        Web app that allows employees within a team to communicate with one another by posting announcements
                        <div class="topic">Tech Stack: Angular, Express.js, Node.js, MySQL</div>
                    </a>
                    <a class="box" href={"https://github.com/ParthSolanki1/RedditPopularity"} target={"_blank"}>
                        <div class="topic">Reddit Popularity Research</div>
                        Utilized rigorous Data Science methods such as Random forest, Logistic Regression, Naive Bayes, Sentiment Ananlysis, and bag of word techniques to determine whether the popularity of a Reddit post can be determined solely by the content
                        <div class="topic">Tech Stack: Python, Jupyter Notebook, Numpy, Scikit-learn, pandas</div>
                    </a>
                    <a class="box" href={"https://github.com/ParthSolanki1/Music-Synthesizer"} target={"_blank"}>
                        <div class="topic">Mini Music Synthesizer</div>
                        Produced a script that creates an executable .wav file from musical notes inputted by user through text files, using Karplus-Strong plucked string algorithm
                        <div class="topic">Tech Stack: C</div>
                    </a>
                    <a class="box" href={"https://github.com/ParthSolanki1/PlanSim"} target={"_blank"}>
                        <div class="topic">Planet Simulator</div>
                        A 2d game that simulates the movement of a spaceship navigating through planets with varying gravities
                        <div class="topic">Tech Stack: Python, Pygame</div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Myprojects;