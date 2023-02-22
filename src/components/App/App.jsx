import { Component } from 'react';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../GlobalStyle';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

export default class App extends Component {
  static defaultProps = {
    className: PropTypes.string,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      if (!this.state.hasOwnProperty(feedback)) {
        throw new Error('Bad feedback option');
      }
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;
    return (
      Math.floor(((good + neutral) / this.countTotalFeedback()) * 100) || 0
    );
  };

  render() {
    const { className } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <div className={className}>
        <GlobalStyle />
        <Section title="Please, leave feedback" className="section--feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
            className="feedbackOptions"
          />
        </Section>
        <Section title="Statistics" className="section--statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            className="statistics"
          ></Statistics>
        </Section>
      </div>
    );
  }
}
