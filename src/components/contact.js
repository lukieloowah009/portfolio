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
                        I have always been curious about the inner workings and the intricate details of things. This childhood habit was carried over to my present self which motivates me to solve problems and refine my creativity in software development. Coupled with hard work ethics and extensive work experience, I have been able to grow individually and professionally. I have worked with full-stack web development as well as with microservices that integrates cloud technologies such as Azure.

Another passion of mine is exploring different cultural viewpoints. Having a chance of attending a boarding high school located in Norway, where students from 98 different countries live and study side by side, I have become an individual willing to embrace diversity and hold meaningful conversations. 
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
