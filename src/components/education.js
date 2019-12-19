import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <h7><strong>{this.props.schoolName} - Gainesville, Fl</strong></h7>
                        <p>
                            {this.props.gpa}
                        </p>
                        <br />
                        <h7><strong>Red Cross Nordic United World College - Flekke, Norway</strong></h7>
                        <p>
                            38/42
                    </p>
                    </Cell>
                    <Cell col={8} style={{ textAlign: 'right' }}>
                        <h7 ><strong>{this.props.major}</strong></h7>
                        <p>{this.props.endYear}</p>
                        <br />
                        <h7> <strong>International Baccalaureate</strong></h7>
                        <p>May 2017</p>
                    </Cell>
                </Grid>
                <hr />
                <Grid>
                    <Cell col={12}>
                        <h2>Software Engineering Experience</h2>
                        <h7><strong>=> Nexlabs - Software Engineer Intern (May 2019 - August 2019)</strong></h7>
                        <p>BudgetingTool – Web Application, PHP Laravel, Vue.js and MySQL <br />
                            <ul>
                                <li>Developed ​Backend ​using PHP Laravel Framework with MySQL Database with an implementation of user authentication feature using JWT .</li>
                                <li>Created ​REST APIs​ for efficient data query in accordance with front-end developer’s needs.</li>
                                <li>Authored API documentation for API calls and for improved scalability and maintainability.</li>
                                <li>Debugged and worked closely with system admin for successfully app deployment onto AWS server.</li>
                            </ul>
                        </p>
                        <br />
                        <p>Ingredient2Recipe Chatbot – Messenger AI Chatbot with Google Cloud Vision API <br />
                            <ul>
                                <li>Implemented ​Backend​ with ​REST APIs​ for information from data set of containing more than 3000 recipes.</li>
                                <li>Integrated Google Cloud Vision APIs with Laravel framework for image label recognition capabilities.</li>
                                <li>Carried out unit and feature testing to ensure full functionality of the software using PHPUnit.</li>
                                <li>Deployed back-end APIs through Heroku.</li>
                            </ul>
                        </p>
                        <br />
                        <h7><strong>=> Association of Computer Engineers ​– ​Google CS Ignite Volunteer (April 2019 – May 2018)</strong></h7>
                        <p>
                            <ul>
                                <li>Collaborated with other volunteers to teach C++ for middle schoolers at Oaks View Middle School which wassponsored by Google.</li>
                                <li>Provided fundamental coding lessons and exercises for middle school students.</li>
                                <li>Guided the students to build a programmable VEX IQ Remote controlled cars with sensor capabilities.</li>
                            </ul>
                        </p>
                        <br />

                    </Cell>
                </Grid>
                <hr />

                <Grid>
                    <Cell col={12}>
                        <h2>Additional Work Experience</h2>
                        <h7><strong>=> Thabyay Education Foundation​ – ​IT Department Assistant (August 2014 – August 2015)</strong></h7>
                        <p>
                            <ul>
                                <li>Performed administrative and IT related tasks such as data-entry, computer software installation and logistics arrangement for events.</li>
                            </ul>
                        </p>
                        <br />
                        <h7><strong>=> Young Men Christian Association – ​Translator (August 2014 – August 2015)</strong></h7>
                        <p>
                            <ul>
                                <li>Worked as an English Translator for exchange students from Denmark and South Korea.</li>
                            </ul>
                        </p>
                        <br />

                    </Cell>
                </Grid>
                <hr />
                <Grid>
                    <Cell col={12}>
                        <h2>Projects List</h2>
                        <p>
                            <ul>
                                <li>Budgeting Tool</li>
                                <li>Ingredient2Recipe Chatbot</li>
                                <li>CRM (Customer Relationship Management) App - WORK IN PROGRESS</li>
                                <li>Personal Website(this website)</li>
                                <li>Minesweeper</li>
                                <li>Pokedex</li>
                                <li>LinkedList</li>
                                <li>Database Interface</li>
                            </ul>
                        </p>

                    </Cell>
                </Grid>
                <hr />
                <Grid>
                    <Cell col={12}>
                        <h2>Skills and Technologies</h2>
                        <p>
                            C++, Java, PHP, Agile, Laravel, SQL, Git, React, Express, Assembly, Matlab, Mongodb
                        </p>

                    </Cell>
                </Grid>
                <hr />
                <Grid>
                    <Cell col={12}>
                        <h2>Awards</h2>
                        <p>
                            Dean's List(3 semesters), University of Florida Full Scholarship Recipient, Davis United World College Scholar
                        </p>

                    </Cell>
                </Grid>
                <hr />
                <Grid>
                    <Cell col={12}>
                        <h2>Languages</h2>
                        <p>
                            English- Fluent, Burmese - Native, Karen - Native, Spanish - Beginner
                        </p>

                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Education;