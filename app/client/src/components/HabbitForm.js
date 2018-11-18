import React, {Component} from 'react';
import Col from 'react-bootstrap/lib/Col';
import {Glyphicon} from 'react-bootstrap';

export default class HabbitForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.nameField.value);
        this.props.hideForm();
    }

    render() {
        return(
            <div className='main-header'>
                <Col xs={2}>
                    <Glyphicon 
                        onClick={this.props.hideForm} 
                        glyph='chevron-left' />
                </Col>
                <Col xs={10}>
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type='text' 
                            name="name" 
                            ref={(el) => this.nameField = el } />
                        <input 
                            type="submit" 
                            value="Submit" />
                    </form>
                </Col>
            </div>
        );
    }
}