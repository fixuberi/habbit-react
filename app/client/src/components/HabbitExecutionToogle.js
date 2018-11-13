import React, {Component} from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import  axios from 'axios';

class HabbitExecutionToogle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            executed: false,
            executionId: null };
        this.handleCreating = this.handleCreating.bind(this);
        this.handleRemoving = this.handleRemoving.bind(this);
    }

    componentDidMount() {
        let executions = this.props.executions;
        for (let i = 0; i < executions.length; i++) {
            if (executions[i].date === this.props.currentDate) {
                 this.setState({executed: true, executionId: executions[i].id});
            }
        }
    }

    handleCreating () {
        let currentDate = this.props.currentDate;
        axios.post(`http://localhost:3001/habbits/${this.props.habbitId}/executions`, { date: currentDate })
            .then(response => 
                {this.setState({ 
                    executed: true, 
                    executionId: response.data.id })})
            .catch(error => console.error(error.message)); 
    }

    handleRemoving () {
        axios.delete(`http://localhost:3001/habbits/${this.props.habbitId}/executions/${this.state.executionId}`)
            .then(this.setState({
                 executed: false,
                 executionId: null }))
            .catch(error => console.error(error.message)); 
    }

    render() {
        let executedIcon = (<Glyphicon glyph="ok" onClick={this.handleRemoving}/>);
        let missedIcon = (<Glyphicon glyph="remove" onClick={this.handleCreating}/>);

        let toogle = this.state.executed ? executedIcon : missedIcon;
        return(
            <td>            
                {toogle}
            </td>
        );
    }
}

export default HabbitExecutionToogle;