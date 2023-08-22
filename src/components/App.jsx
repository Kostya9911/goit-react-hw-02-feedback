// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };
  countBad = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };
  countNeutral = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };

  countTotalFeedback = (good, bad, neutral) => {
    return bad + good + neutral;
  };
  countPositiveFeedbackPercentage = (good, bad, neutral) => {
    return Math.round((good / (good + bad + neutral)) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;

    // const positivePercentage = Math.round((good / total) * 100);
    return (
      <div>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            state={this.state}
            countGood={this.countGood}
            countBad={this.countBad}
            countNeutral={this.countNeutral}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(good, bad, neutral)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              good,
              bad,
              neutral
            )}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
