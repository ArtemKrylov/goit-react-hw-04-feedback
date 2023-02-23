import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  className,
}) => {
  return (
    <ul className={className}>
      <li className={`statistics__item`}>
        <div className={`statistics__value`}>
          <span className={`statistics__value-name`}>Good:</span>
          <span className={`statistics__value-number`}>{good}</span>
        </div>
      </li>
      <li className={`statistics__item`}>
        <div className={`statistics__value`}>
          <span className={`statistics__value-name`}>Neutral:</span>
          <span className={`statistics__value-number`}>{neutral}</span>
        </div>
      </li>
      <li className={`statistics__item`}>
        <div className={`statistics__value`}>
          <span className={`statistics__value-name`}>Bad:</span>
          <span className={`statistics__value-number`}>{bad}</span>
        </div>
      </li>
      <li className={`statistics__item`}>
        <div className={`statistics__value`}>
          <span className={`statistics__value-name`}>Total:</span>
          <span className={`statistics__value-number`}>{total}</span>
        </div>
      </li>
      <li className={`statistics__item`}>
        <div className={`statistics__value`}>
          <span className={`statistics__value-name`}>Positive feedback:</span>
          <span className={`statistics__value-number`}>
            {positivePercentage}%
          </span>
        </div>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Statistics;
