import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import { Link } from 'react-router-dom';
import { Col, Glyphicon } from 'react-bootstrap';
import HabbitForm from './HabbitForm';

export default class HabbitInfoHeader extends React.Component {
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
        <Col xs={2}>
          <Link to="/">
            <Glyphicon glyph="chevron-left" />
          </Link>
        </Col>
        <Col xs={8}>{this.props.name}</Col>
        <Col xs={2}>
          <Glyphicon onClick={this.showForm} glyph="pencil" />
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
