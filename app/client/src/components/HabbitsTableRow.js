import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table';
import HabbitExecutionToogle from './HabbitExecutionToogle';

class HabbitsTableRow extends React.Component {
    setExecutionToogles () {
        let executionToogles = [];
        let lastDays = this.props.lastDays;
        for (let date in lastDays) {
            let toogle = <HabbitExecutionToogle 
                            key={date}
                            currentDate={date} 
                            executions={this.props.executions} />;
            executionToogles.push(toogle);
        }
        return executionToogles;
    }
    render() {
        let executionToogles = this.setExecutionToogles();
        return(
            <tr>
                <td className='habbit-name'>{this.props.name}</td>
                {executionToogles}
             </tr>
        );
    }
}

export default HabbitsTableRow;