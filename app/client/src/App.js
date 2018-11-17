import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HabbitsScreen from './components/HabbitsScreen';
import HabbitInfo from './components/HabbitInfo'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/habbits/:id" component={HabbitInfo} />
        <Route path="/" component={HabbitsScreen} />
      </Switch>
    );
  }
}

export default App;
