import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table';

class HabbitsTableRow extends React.Component {
    render() {
        
        return(
            <tr>
                <td className='habbit-name'>{this.props.name}</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
             </tr>
        );
    }
}

export default HabbitsTableRow;