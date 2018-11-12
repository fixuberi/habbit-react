import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table';
import HabbitsTableRow from './HabbitsTableRow';

class HabbitsTableContent extends React.Component {
    render() {
        let habbits = this.props.habbits.map(habbit => {
            return <HabbitsTableRow key={habbit.id} 
                                executions={habbit.executions} 
                                name={habbit.name} />}
                                );
        return(
            <tbody>
                {habbits}
            </tbody>
        );
    }
}

export default HabbitsTableContent;