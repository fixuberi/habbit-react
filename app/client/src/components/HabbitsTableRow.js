import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HabbitExecutionToogle from './HabbitExecutionToogle';

class HabbitsTableRow extends React.Component {
    setExecutionToogles () {
        let executionToogles = [];
        let lastDays = this.props.lastDays;
        for (let date in lastDays) {
            let toogle = <HabbitExecutionToogle 
                            key={date}
                            currentDate={date} 
                            habbitId={this.props.id}
                            executions={this.props.executions} />;
            executionToogles.push(toogle);
        }
        return executionToogles;
    }
    render() {
        let executionToogles = this.setExecutionToogles();
        return(
            <tr>
                <td className='habbit-name'>
                    <Link to={`/habbits/${this.props.id}`}>
                        {this.props.name}
                    </Link>
                </td>
                {executionToogles}
             </tr>
        );
    }
}

export default HabbitsTableRow;