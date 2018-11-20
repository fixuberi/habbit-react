import React, { Component } from 'react';
import HabbitsScreenHeader from './HabbitsScreenHeader';
import HabbitsTable from './HabbitsTable';
import Grid from 'react-bootstrap/lib/Grid';
import axios from 'axios';

class HabbitsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habbits: [],
    };
    this.handleCreateHabbit = this.handleCreateHabbit.bind(this);
  }

  handleCreateHabbit(name) {
    axios
      .post('http://localhost:3001/habbits', { name: name })
      .then(response => this.setState({ habbits: this.state.habbits.concat(response.data) }))
      .catch(error => console.error(error.message));
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/habbits')
      .then(response => this.setState({ habbits: response.data }))
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <Grid>
        <HabbitsScreenHeader handleSubmit={this.handleCreateHabbit} />
        <HabbitsTable habbits={this.state.habbits} />
      </Grid>
    );
  }
}

export default HabbitsScreen;
