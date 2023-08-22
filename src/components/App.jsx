// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  // countTotalFeedback = () => {};
  // countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // total={}
            // positivePercentage={}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
