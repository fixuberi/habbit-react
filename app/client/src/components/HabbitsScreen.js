import React, {Component} from 'react';
import HabbitsScreenHeader from './HabbitsScreenHeader';
import HabbitsTable from './HabbitsTable';
import Grid from 'react-bootstrap/lib/Grid'
import axios from'axios';

class HabbitsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            habbits: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/habbits')
            .then(response => this.setState( {habbits: response.data} ))
            .catch(error => console.log(error.message));
    }

    render() {
        return(
            <Grid>
                <HabbitsScreenHeader />
                <HabbitsTable habbits={this.state.habbits}/>
            </Grid>
        );
    }
}

export default HabbitsScreen;