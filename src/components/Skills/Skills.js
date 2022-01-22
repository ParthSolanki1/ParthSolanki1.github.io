import react from "react"
import "./Skills.css"

function Skills() {
    return (
        <section class="skills" id="skills">
            <div class="content">
            <div class="title"><span>My Skills</span></div>
                <div className="skill-list">
                    <div className="topic">Advanced</div>
                    <div className="skill-level">
                        <div className="box">
                            <i class="devicon-python-plain"></i>
                            Python
                        </div>
                        <div className="box">
                            <i class="devicon-javascript-plain"></i>
                            Javascript
                        </div>
                        <div className="box">
                            <i class="devicon-react-plain"></i>
                            React
                        </div>
                        <div className="box">
                            <i class="devicon-flask-plain"></i>
                            Flask
                        </div>
                        <div className="box">
                            <i class="devicon-postgresql-plain"></i>
                            SQL
                        </div>
                        <div className="box">
                            <i class="devicon-html5-plain"></i>
                            HTML
                        </div>
                        <div className="box">
                            <i class="devicon-css3-plain"></i>
                            CSS
                        </div>
                    </div>

                    <div className="topic">Intermediate</div>
                    <div className="skill-level">
                        <div className="box">
                            <i class="devicon-java-plain"></i>
                            Java 
                        </div>
                        <div className="box">
                            <i class="devicon-c-plain"></i>
                            C
                        </div>
                        <div className="box">
                            <i class="devicon-docker-plain"></i>
                            Docker
                        </div>
                        <div className="box">
                            <i class="devicon-mongodb-plain"></i>
                            MongoDB
                        </div>
                        <div className="box">
                            <i class="devicon-pandas-plain"></i>
                            Pandas
                        </div>
                        <div className="box">
                            <i class="devicon-numpy-plain"></i>
                            Numpy
                        </div>
                        <div className="box">
                            <i class="devicon-nodejs-plain"></i>
                            Node.js
                        </div>
                        <div className="box">
                            <i class="devicon-express-original"></i>
                            Express
                        </div>
                    </div>

                    <div className="topic">Fundamentals</div>
                    <div className="skill-level">
                        <div className="box">
                            <i class="devicon-angularjs-plain"></i>
                            Angular
                        </div>
                        <div className="box">
                            <i class="devicon-android-plain"></i>
                            Android
                        </div>
                        <div className="box">
                            <i class="devicon-graphql-plain"></i>
                            GraphQL
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;