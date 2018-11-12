import  React, {Component} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';
import HabbitsTableHeader from './HabbitsTableHeader';
import HabbitsTableContent from './HabbitsTableContent';


class HabbitsTable extends React.Component {
    render() {
        return(
            <Row>
                <Table>
                    <HabbitsTableHeader />
                    <HabbitsTableContent habbits={this.props.habbits} />
                </Table>
            </Row>
        );
    }
}


export default HabbitsTable;