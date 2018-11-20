import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Glyphicon } from 'react-bootstrap';
import HabbitForm from './HabbitForm';

class HabbitsScreenHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayForm: false };
    this.hideForm = this.hideForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  hideForm() {
    this.setState({ displayForm: false });
  }

  showForm() {
    this.setState({ displayForm: true });
  }

  render() {
    const defaultHeader = (
      <div className="main-header">
        <Col xs={8} xsOffset={2}>
          <div>{'my habbits'}</div>
        </Col>
        <Col xs={2}>
          <Glyphicon onClick={this.showForm} glyph="plus" />
        </Col>
      </div>
    );
    const habbitForm = (
      <HabbitForm handleSubmit={this.props.handleSubmit} hideForm={this.hideForm} />
    );
    const header = this.state.displayForm ? habbitForm : defaultHeader;
    return <Row>{header}</Row>;
  }
}

export default HabbitsScreenHeader;
