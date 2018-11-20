import React, { Component } from 'react';
import ExecutionsCalendar from './ExecutionsCalendar';
import { Row } from 'react-bootstrap';

export default class HabbitInfoContent extends React.Component {
  render() {
    return <ExecutionsCalendar executions={this.props.executions} />;
  }
}
