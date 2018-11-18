import React, {Component} from 'react';
import axios from 'axios';
import HabbitInfoHeader from './HabbitInfoHeader';
import HabbitInfoContent from './HabbitInfoContent'

export default class HabbitInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            habbit: {},
            executions: []
         };
         this.handleUpdateHabbit = this.handleUpdateHabbit.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/habbits/${this.props.match.params.id}`)
            .then(response => this.setState({ 
                habbit: {
                    name: response.data.name, 
                    id: response.data.id},
                executions: 
                    response.data.executions }))
            .catch(error => console.error(error.message));
    }

    handleUpdateHabbit(name) {
        axios.put(`http://localhost:3001/habbits/${this.state.habbit.id}`, { name: name })
            .then(response => this.setState({ 
                habbit: {name: name} }))
            .catch(error => console.error(error.message));
    }
    render() {
        const habbit = this.state.habbit;
        const executions = this.state.executions;
        return(
            <div>
                <HabbitInfoHeader 
                    name={habbit.name}
                    id={habbit.id} 
                    handleSubmit={this.handleUpdateHabbit} />
                <HabbitInfoContent 
                    name={habbit.name}
                    id={habbit.id}
                    executions={executions} />
            </div>
        );
    }
}