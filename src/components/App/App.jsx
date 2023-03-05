import PropTypes from 'prop-types';
import { useState } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export default function App({ className }) {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedback;

  const onLeaveFeedback = feedbackOption => {
    if (!feedback.hasOwnProperty(feedbackOption)) {
      throw new Error('Bad feedback option');
    }
    setFeedback(prev => ({
      ...prev,
      [feedbackOption]: prev[feedbackOption] + 1,
    }));
  };

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good, neutral } = feedback;
    return Math.floor(((good + neutral) / countTotalFeedback()) * 100) || 0;
  };

  return (
    <div className={className}>
      <GlobalStyle />
      <Section title="Please, leave feedback" className="section--feedback">
        <FeedbackOptions
          options={feedback}
          onLeaveFeedback={onLeaveFeedback}
          className="feedbackOptions"
        />
      </Section>
      <Section title="Statistics" className="section--statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            className="statistics"
          ></Statistics>
        ) : (
          <Notification
            message="There is no feedback"
            className="statistics__notification"
          />
        )}
      </Section>
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string.isRequired,
};
