import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-page">
                    <Cell col={12}>
                        <img
                            src={require('../Files/HEADSHOT.jpeg')}
                            alt="avatar"
                            className="avatar-img"
                         />
                         <div className="banner-text">
                             <h1 align="center">Full Stack Web Developer</h1>
                             <hr />
                             <p align="center"> 
                                 C++ | Java | PHP | Agile | Laravel | SQL | Git | React | Assembly | CSS | Express  
                             </p>
                             <div className="social-links">
                                <a href="https://www.linkedin.com/in/swah0/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/lukieloowah009" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a href="mailto:swah@ufl.edu" subject="subject text" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                            </div>
                         </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;