import React, {Component}  from 'react';
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col';
import {Button, Glyphicon} from 'react-bootstrap';

class HabbitsScreenHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayForm: false };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.nameField.value);
        this.setState({ displayForm: false });
    }
    render() {
        const defaultHeader = (
            <div className='main-header'>
                <Col xs={10}>
                    <div>{'my habbits'}</div>
                </Col>
                <Col xs={2}>
                    <Glyphicon 
                        onClick={()=> this.setState({ displayForm: true })}
                        glyph='plus' />
                </Col>
            </div>
        );
        const  habbitForm = (
            <div className='main-header'>
                <Col xs={2}>
                    <Glyphicon 
                        onClick={()=> this.setState({ displayForm: false })} 
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
        const header = this.state.displayForm? habbitForm : defaultHeader;
        return(
            <Row>
                {header}
            </Row>
        );   
    }
}

export default HabbitsScreenHeader;