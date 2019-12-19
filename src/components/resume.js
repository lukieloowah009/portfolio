import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Education from './education';
import Button from '@material-ui/core/Button';

class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <Grid>
                        <Cell col={4}>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="https://cdn4.iconfinder.com/data/icons/people-avatar-1-2/512/7-512.png"
                                    alt="avatar"
                                    style={{ height: '200px' }}
                                />
                            </div>
                            <h2 style={{ paddingTop: '2em' }}>Saw Luke Loo Wah</h2>
                            <h4 style={{ color: 'grey' }}>Enthusiastic Developer</h4>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                            <p>
                                Ambitious developer with a demonstrated history of working in a software development sector using Express, React, Laravel with MySQL. Skilled in Object Oriented Programming Languages: Java, C++, PHP as well as soft skills: Teamwork and Communication. Familiar with Agile Software Development. Currently pursuing a Bachelor of Science in Computer Science with a minor in Mass Communication at the University of Florida.
                            </p>
                            <hr style={{ borderTop: '3px solie #833fb2', width: '50%' }} />
                            <h5>Address</h5>
                            <p>
                                3301 SW 13th St, Gainesville, Florida, 32608
                            </p>
                            <h5>Phone</h5>
                            <p>
                                (352)870-3862
                            </p>
                            <h5>Email</h5>
                            <p>swah@ufl.edu | lukieloowah009@gmail.com</p>
                            <h5>Website</h5>
                            <p> https://lukieloowah009.github.io/personalwebsite</p>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                            <Button variant="outlined" color="primary">
                                <a href="../Files/Resume.pdf" class="button" download>
                                Download Resume
                                </a>
                            </Button>
                        </Cell>
                        <Cell className="resume-right-col" col={8}>
                            <h2>Education</h2>
                            <Education
                                endYear="May 2021"
                                schoolName="University of Florida"
                                gpa="GPA: 3.60/4.00"
                                major="B.S Computer Science; Minor: Mass Communication"
                            />

                        </Cell>
                    </Grid>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Resume</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;