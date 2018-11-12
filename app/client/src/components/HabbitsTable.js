import  React, {Component} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Table from 'react-bootstrap/lib/Table';
import HabbitsTableHeader from './HabbitsTableHeader';
import HabbitsTableContent from './HabbitsTableContent';


class HabbitsTable extends React.Component {
    last4Days() {
        let result= {};
        for (let i = 0; i < 4; i++) {
            let d = new Date();
            d.setDate(d.getDate() - i);
            result[d.toISOString().slice(0,10)] = d.toString().split(' ')[0];
        }
        return result;
    }

    render() {
        return(
            <Row>
                <Table>
                    <HabbitsTableHeader lastDays={this.last4Days()} />
                    <HabbitsTableContent 
                        habbits={this.props.habbits}
                        lastDays={this.last4Days()} />
                </Table>
            </Row>
        );
    }
}


export default HabbitsTable;