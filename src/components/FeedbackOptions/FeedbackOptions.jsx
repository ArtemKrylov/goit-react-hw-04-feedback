import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback, className }) => {
  return (
    <ul className={className}>
      {Object.keys(options).map(option => (
        <li key={option} className="feedBackOptions__item">
          <button
            className={`feedBackOptions__button ${option}`}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
  className: PropTypes.string,
};
