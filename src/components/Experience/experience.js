import React from "react";
import "./experience.css"

function Experience() {
    return (
        <section class="experience" id="experience">
            <div class="content">
                <div class="title"><span>Experience</span></div>
                <div class="boxes">
                    <a class="box" href={"https://jobs.rbc.com/ca/en/amplify"} target={"_blank"}>
                        <div class="topic">Royal Bank of Canada</div>
                        <div class="topic">Amplify Developer Intern</div>
                        <div class="topic">May 2021 - Sept. 2021</div>
                        <ul>
                            <li>Designed a production-ready machine learning pipeline to solve low risk fraud dispute claims made by customers, saving ~48 hours of investigation time by fraud officers</li>
                            <li>Created a microservice that efficiently ran the model for selected transactions and used user research to design and develop an easy-to-use UI</li>
                            <li>Finalist for a hackathon-like internship which resulted in filing a patent</li>
                            <li>Technologies: React, Flask, Python, Docker, Dataiku, OpenShift, SQL</li>
                        </ul>
                    </a>
                    <a class="box" href={"https://jobs.rbc.com/ca/en/wealth-management"} target={"_blank"}>
                        <div class="topic">Royal Bank of Canada</div>
                        <div class="topic">Software Developer Intern</div>
                        <div class="topic">January 2020 - May 2020</div>
                        <ul>
                            <li>Created scripts in C# .net core used toc leanse and transferd ata safely between vendor databases saving ~8 hours of management by support teams</li>
                            <li>Implemented a scheduled monthly mass email service in C# .net core that creates and emails Excel reports to their respective departments saving ~3 hours in report creation time</li>
                            <li>Lead a team of 3 to research and ideate a preliminary plan on how to migrate to S3 storage</li>
                            <li>Technologies: Angular, C# .net core, Pivotal Cloud Foundry (PCF), SQL, S3</li>
                        </ul>
                    </a>
                    <a class="box" href={"https://www.cgi.com/canada/en-ca/startmycareer"} target={"_blank"}>
                        <div class="topic">CGI Inc.</div>
                        <div class="topic">Software Developer Intern</div>
                        <div class="topic">May 2019 - Sept. 2019</div>
                        <ul>
                            <li>Worked as a Client-Side Developer at the Canadian Imperial Bank of Commerce (CIBC) in order to develop large scale web applications.</li>
                            <li>Lead a team of 4 in implementing Accessibility for Ontarians with Disabilities Act's (AODA) guidelines to ensure applications are compliant, resulting in application getting approval from an AODA auditor.</li>
                            <li>Technologies: Angular, HTML, CSS, SQL, NodeJS</li>
                        </ul>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Experience;