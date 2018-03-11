import React, { Component } from 'react';

import Greetings from '../Greetings/greetings';
import TrainingMetamorphosis from '../Training/training';
import Team from '../Team/team';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Greetings />
        <TrainingMetamorphosis />
        <Team />
      </div>
    );
  }
}