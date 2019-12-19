import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Saw Luke Loo Wah</h2>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                            alt="avatar"
                            style={{ height: '200px' }} />
                        <p style={{ width: '70%', margin: 'auto', paddingTop: '1em' }}>
                        Ambitious developer with a demonstrated history of working in a software development sector using Express, React, Laravel with MySQL. Skilled in Object Oriented Programming Languages: Java, C++, PHP as well as soft skills: Teamwork and Communication. Familiar with Agile Software Development. Currently pursuing a Bachelor of Science in Computer Science with a minor in Mass Communication at the University of Florida.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>
                            Contact Me
                        </h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (352)870-3862
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" />
                                        swah@ufl.edu
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" />
                                        lukieloowah009@gmail.com
                                        </ListItemContent>
                                </ListItem>

                                
                                
                            </List>
                        </div>

                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Contact;