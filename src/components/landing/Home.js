import React from 'react';
import image from '../../img/MyPictureEdited.jpg'


const Home = () => {
    return (

        <div id="page-wrap">

            <img src={image} alt="Photo of Rahul" id="pic" />

            <div id="contact-info" class="vcard">


                <h1 className="fn">Rahul Chauhan</h1>

                <p>
                    Cell: <span className="tel">09910896761</span><br />
                    Email: <a className="email" href="mailto:rahul.chauhan4@amdocs.com">rahul.chauhan4@amdocs.com</a>
                </p>
            </div>

            <div id="objective">
                <p>
                    I am an outgoing and energetic (ask anybody) young professional, seeking a
                    career that fits my professional skills, personality, and Satisfaction.
                    Results-oriented, resourceful and problem-solving software engineer professional with a get-it-
                    done, on-time spirit.
                </p>
            </div>

            <div className="clear"></div>

            <dl>
                <dd className="clear"></dd>

                <dt>Education</dt>
                <dd>
                    <h2>GGSIPU - New Delhi</h2>
                    <p><strong>Couse:</strong> B.Tech<br />
                        <strong>Branch:</strong> Information Technology</p>
                </dd>

                <dd className="clear"></dd>

                <dt>Skills</dt>
                <dd>
                    <h2>Programming</h2>
                    <p>JavaScript/JQuery, ReactJs, HTML, Oracle PL/SQL, Restful Web services, CSS, Core Java, J2EE, C# and Asp.Net</p>

                    <h2>Project Management & Tarcking</h2>
                    <p>Rally, Bugzilla and QC</p>

                    <h2>Versioning, Content Management and Integration</h2>
                    <p>Perforce, Code collaborator, Gerrir, Tortoise Git, Svn, SharePoint and Jenkins</p>
                </dd>

                <dd className="clear"></dd>

                <dt>Experience</dt>
                <dd>
                    <h2>Amdocs<span>Software Developer - Pune - 2017 to Now</span></h2>
                    <ul>
                        <li>Developed full functional Automation framework using J2EE, EJB, Jenkins, Groovy, Batch Script and SoapUI which will be executed automatically through Jenkins on ICM environments at regular intervals through a standalone server.</li>
                        <li>Defect handling in UAT and Regression</li>
                        <li>Development tasks for Enhancement of functionalities and adding new feature for creating new business opportunities for ATTC</li>
                        <li>Regular support and maintenance of the Automation framework.</li>
                        </ul>

                    <h2>Capgemini <span>Associate Consultant - Mumbai - 2014-17</span></h2>
                    <ul>
                        <li>Developed web based applications for the customer and the customer support to manage and maintain the Service Processor which takes care of the various services like data center, fragment and proxy servers.</li>
                        <li>REST API integration to achieve end to end readiness of a functionality.</li>
                        <li>Communicate with the client to understand and analyze the features requirement.</li>
                        <li>Plan, analyze and create design document to develop the UI Interface as per the requirement. Develop REST wrappers, business logic for the REST API as per the client requirement.</li>
                        <li>Worked on Internal HP UI framework and Java API for Restful Web Services (JAX-RS).Using GIT version control, Gerrit review, Jasmine unit testing and JUnit.</li>
                        <li>Demo the client with regular work and features implemented</li>
                    </ul>
                </dd>

                <dd className="clear"></dd>

                <dt>Honors/Awards</dt>
                <dd>Most Significant and valuable contribution(Amdocs), Achiever of quarter(Capgemini)</dd>

                <dd className="clear"></dd>

                <dt>Hobbies</dt>
                <dd>Dota, Anime, Food and Driving</dd>

                <dd className="clear"></dd>
            </dl>

            <div className="clear"></div>

        </div>

    );
};



export default Home;
