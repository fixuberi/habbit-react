import React, {Component} from 'react';
import axios from 'axios';

export default class HabbitInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            habbit: {}
         }
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/habbits/${this.props.match.params.id}`)
            .then(response => this.setState({ habbit: response.data }))
            .catch(error => console.error(error.message));
    }
    render() {
        const habbit = this.state.habbit;
        const executions = this.state.habbit.executions;
        return(
            <h1>{`info ${habbit.name}`}</h1>
        );
    }
}