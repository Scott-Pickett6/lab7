
function About() {
    return (
        <main className="container d-flex flex-column">
            <h2 className="align-self-center">About</h2>
            <div className="ms-5">
                <section>
                    <h4>Education</h4>
                    <ul>
                        <li>
                            <strong>Prince Andrew High School</strong> - High School Diploma
                        </li>
                        <li>
                            <strong>Dalhousie University</strong> - Bachelor of Computer Science (Expected Graduation: August 2025)
                        </li>
                    </ul>
                </section>
                <section>
                    <h4>Experience</h4>
                    <ul>
                        <li><strong>Giant Tiger</strong> - Grocery Associate (July 2020 - August 2022)</li>
                        <li><strong>Maritime Travel</strong> - Junior Software Developer (May 2023 - August 2023)</li>
                        <li><strong>CAE</strong> - Junior Programmer Intern (Jan 2024 - August 2024)</li>
                    </ul>
                </section>
                <section>
                    <h4>Technical Skills</h4>
                    <div className="ms-4">
                        <h6>Programming Languages</h6>
                        <ul>
                            <li>Java</li>
                            <li>C</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>PHP</li>
                        </ul>
                        <h6>Tools</h6>
                        <ul>
                            <li>React</li>
                            <li>Unity</li>
                            <li>Django</li>
                            <li>ASP.NET MVC</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h4>Goals</h4>
                    <p>
                        My goals are to graduate from Dalhousie in August 2025 and then begin working as a software developer.
                        I hope to go back and work for CAE as I enjoyed working there as an intern.
                        I also hope to code outside of work and build my own personal projects. Unity is something specificly I would like to improve on.
                    </p>
                </section>
            </div>
        </main>
    );
}

export default About;