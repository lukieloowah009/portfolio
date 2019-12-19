import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class singleProject extends Component {
    render() {
        return (

            <Card shadow={5} style={{ minwidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#000000', height: '176px', background: this.props.link }}>{this.props.project_name}</CardTitle>
                <CardText>
                    {this.props.description}
                </CardText>
                <CardActions border>
                    <Button colored ripple>More Info</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

        )
    }
}

export default singleProject;