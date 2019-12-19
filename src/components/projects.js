import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './singleProject';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Grid>
                    <Cell col={12}>
                        <div className="project_tiles">
                            <Project
                                project_name="Budgeting Tool"
                                description="Internal company’s software to be used by project managers and business development analysts to calculate quotations and rates of customers’ projects."
                                link='url(https://logonoid.com/images/laravel-logo.png) center / cover'
                            />
                            <Project
                                project_name="Ingredient2Recipe Chatbot"
                                description="One of the intern projects which is a messenger chatbot integrated with Google Cloud Vision API to recognize ingredient images and respond with recipes related to that ingredient. "
                                link='url(https://logonoid.com/images/laravel-logo.png) center / cover'
                            />
                        </div>
                    </Cell>
                </Grid>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="project_tiles">
                    <Project
                        project_name="Database Interface"
                        description="GUI for querying and editing the flowers database using express for APIs and sqlite for database"
                        link='url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover' />
                    <Project
                        project_name="Personal Website"
                        description="Personal Website built with React using Components for Material Design Lite and Font Awesome"
                        link='url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover' />
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="project_tiles">
                    <Project
                        project_name="LinkedList"
                        description="This is a project I undertook which involved creating a LinkedList data structure from scratch. This includes all LinkedList functions including operators as well as other core functions. In addition to that, 10 test cases are included to ensure functionality."
                        link='url(https://ourcodeworld.com/public-media/gallery/categorielogo-5a284afe1346e.png) center / cover' />
                    <Project
                        project_name="Minesweeper"
                        description="This is the first game project I worked on which includes GUI. It involves creating a minesweeper game from scratch using SFML(Simple and Fast Multimedia Library)."
                        link='url(https://ourcodeworld.com/public-media/gallery/categorielogo-5a284afe1346e.png) center / cover' />
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="project_tiles">
                    <Project
                        project_name="Pokedex"
                        description="This is a mini project which focused on the object-oriented concepts. The game involves adding and removing pokemons into pokedex with each pokemons having attributes such as hp, attack etc."
                        link='url(https://ih1.redbubble.net/image.418233732.0994/flat,800x800,075,f.u1.jpg) center / cover' />

                </div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Laravel</Tab>
                    <Tab>React</Tab>
                    <Tab>C++</Tab>
                    <Tab>Java</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;