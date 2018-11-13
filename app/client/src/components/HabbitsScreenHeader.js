import React, {Component}  from 'react';
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col';
import {Button, Glyphicon} from 'react-bootstrap';

function HabbitsScreenHeader() {
    return(
        <Row>
            <div className='main-header'>
                <Col xs={10}>
                    <div>{'my habbits'}</div>
                </Col>
                <Col xs={2}>
                    <Glyphicon glyph='plus' />
                </Col>
            </div>
        </Row>
    );
}

export default HabbitsScreenHeader;