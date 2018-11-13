import React, {Component} from 'react';
 import Button from 'react-bootstrap/lib/Button';
 import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class HabbitExecutionToogle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { executed: false }
    }

    componentDidMount() {
        let executions = this.props.executions;
        for (let i = 0; i < executions.length; i++) {
            if (executions[i].date === this.props.currentDate) {
                 this.setState({executed: true});
            }
        }
    }

    render() {
        let executedIcon = (<Glyphicon glyph="ok" />);
        let missedIcon = (<Glyphicon glyph="remove"/>);

        let toogle = this.state.executed ? executedIcon : missedIcon;
        return(
            <td>            
                {toogle}
            </td>
        );
    }
}

export default HabbitExecutionToogle;