import React, {Component}  from 'react';
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col';

function HabbitsScreenHeader() {
    return(
        <Row>
            <div className='main-header'>
                <Col xs={10}>
                    <div>{'header'}</div>
                </Col>
                <Col xs={2}>
                    <div>{'+'}</div>
                </Col>
            </div>
        </Row>
    );
}

export default HabbitsScreenHeader;